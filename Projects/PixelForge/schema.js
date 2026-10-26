const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),

    description: Joi.string().required(),

    image: Joi.string().uri().allow("").required(),

    price: Joi.number().required().min(0),

    location: Joi.string().required(),

    country: Joi.string().required(),

    address: Joi.string().trim().required(),

    category: Joi.string()
      .valid(
        "rooms",
        "mountains",
        "cities",
        "castles",
        "pools",
        "camps",
        "farms",
        "boats",
        "igloos",
        "trees",
      )
      .required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),

    comment: Joi.string().required(),
  }).required(),
});
