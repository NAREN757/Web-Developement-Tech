const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

// Convert an address into GeoJSON coordinates using TomTom
async function geocodeAddress(address) {
  const apiKey = process.env.TOMTOM_API_KEY;

  if (!apiKey) {
    throw new ExpressError(500, "TomTom API key is not configured.");
  }

  const url = new URL(
    `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json`,
  );

  url.searchParams.set("key", apiKey);
  url.searchParams.set("limit", "1");

  const response = await fetch(url);

  if (!response.ok) {
    throw new ExpressError(502, "TomTom geocoding service failed.");
  }

  const data = await response.json();
  const result = data.results?.[0];

  if (!result?.position) {
    throw new ExpressError(
      400,
      "No matching location found. Please enter a more specific address.",
    );
  }

  return {
    type: "Point",
    coordinates: [result.position.lon, result.position.lat],
  };
}

// Index Route — Display all listings with pagination
module.exports.index = async (req, res) => {
  let { page = 1 } = req.query;
  page = Number(page);

  const limit = 16;

  if (!Number.isInteger(page) || page < 1) {
    throw new ExpressError(404, "Page Not Found!");
  }

  const totalListings = await Listing.countDocuments({});
  const totalPages = Math.ceil(totalListings / limit);

  if (page > totalPages && totalPages > 0) {
    throw new ExpressError(404, "Page Not Found!");
  }

  const skip = (page - 1) * limit;

  const allListings = await Listing.find({})
    .populate("owner")
    .skip(skip)
    .limit(limit);

  res.render("listings/index.ejs", {
    allListings,
    totalListings,
    totalPages,
    currentPage: page,
  });
};

// Render New Listing Form
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Show One Listing
module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "The requested listing does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// Create Listing — Geocode address before saving
module.exports.createListing = async (req, res) => {
  const listingData = { ...req.body.listing };

  if (!listingData.address || !listingData.address.trim()) {
    throw new ExpressError(400, "Property address is required.");
  }

  const geometry = await geocodeAddress(listingData.address.trim());

  delete listingData.geometry;
  delete listingData.latitude;
  delete listingData.longitude;

  const newListing = new Listing({
    ...listingData,
    geometry,
    owner: req.user._id,
  });

  await newListing.save();

  req.flash("success", "New listing created successfully!");
  res.redirect("/listings");
};

// Render Edit Listing Form
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "The requested listing does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};

// Update Listing — Refresh coordinates from address
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listingData = { ...req.body.listing };

  if (!listingData.address || !listingData.address.trim()) {
    throw new ExpressError(400, "Property address is required.");
  }

  const geometry = await geocodeAddress(listingData.address.trim());

  delete listingData.geometry;
  delete listingData.latitude;
  delete listingData.longitude;

  const listing = await Listing.findByIdAndUpdate(
    id,
    {
      ...listingData,
      geometry,
    },
    {
      runValidators: true,
      new: true,
    },
  );

  if (!listing) {
    req.flash("error", "The requested listing does not exist!");
    return res.redirect("/listings");
  }

  req.flash("success", "Listing updated successfully!");
  res.redirect(`/listings/${id}`);
};

// Delete Listing
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;

  const deletedListing = await Listing.findByIdAndDelete(id);

  if (!deletedListing) {
    req.flash("error", "The requested listing does not exist!");
    return res.redirect("/listings");
  }

  req.flash("success", "Listing deleted successfully!");
  res.redirect("/listings");
};
