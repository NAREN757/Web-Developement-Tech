const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/pixelforge";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));

// Home Route
app.get("/", (req, res) => {
  res.send("Hell, I am root");
});

// Validate Listing
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");

    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    let { page = 1 } = req.query;

    const limit = 25;

    page = Number(page);

    // Invalid page number
    if (page < 1 || !Number.isInteger(page)) {
      throw new ExpressError(404, "Page Not Found!");
    }

    const totalListings = await Listing.countDocuments({});

    const totalPages = Math.ceil(totalListings / limit);

    // Page doesn't exist
    if (page > totalPages && totalPages > 0) {
      throw new ExpressError(404, "Page Not Found!");
    }

    const skip = (page - 1) * limit;

    const allListings = await Listing.find({}).skip(skip).limit(limit);

    res.render("listings/index.ejs", {
      allListings,
      totalListings,
      totalPages,
      currentPage: page,
    });
  }),
);

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("listings/show.ejs", { listing });
  }),
);

// Create Route
app.post(
  "/listings",
  validateListing,

  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);

    await newListing.save();

    res.redirect("/listings");
  }),
);

// Edit Route
app.get(
  "/listings/:id/edit",

  wrapAsync(async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("listings/edit.ejs", { listing });
  }),
);

// Update Route
app.put(
  "/listings/:id",
  validateListing,

  wrapAsync(async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    res.redirect(`/listings/${id}`);
  }),
);

// Delete Route
app.delete(
  "/listings/:id",

  wrapAsync(async (req, res) => {
    let { id } = req.params;

    let deletedListing = await Listing.findByIdAndDelete(id);

    console.log(deletedListing);

    res.redirect("/listings");
  }),
);

// 404 Route
app.all("/{*splat}", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Error Handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;

  res.status(statusCode).render("error.ejs", { message });
});

// Server
app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
