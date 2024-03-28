const Joi = require("joi");

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    Comment: Joi.string().required(),
    rating: Joi.string().required().min(1).max(5),
  }).required(),
});
