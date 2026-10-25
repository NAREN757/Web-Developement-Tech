const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

// Authentication
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to continue.");
    return res.redirect("/login");
  }

  next();
};

// Preserve redirect URL after login
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }

  next();
};

// Check listing ownership
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Property not found.");
    return res.redirect("/listings");
  }

  if (
    !listing.owner ||
    !res.locals.currUser ||
    !listing.owner.equals(res.locals.currUser._id)
  ) {
    req.flash("error", "You don't have permission to modify this property.");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

// Validate accommodation listing
module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }

  next();
};

// Validate review
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }

  next();
};

// Check review authorship
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);

  if (!review) {
    req.flash("error", "Review not found.");
    return res.redirect(`/listings/${id}`);
  }

  if (
    !review.author ||
    !res.locals.currUser ||
    !review.author.equals(res.locals.currUser._id)
  ) {
    req.flash("error", "You don't have permission to delete this review.");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
