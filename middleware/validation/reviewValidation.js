// Review Validation middleware
const { reviewSchema } = require("../SchemaValidation/reviewValidationSchema");
const ExpressError = require("../../utils/ExpressError.js");

module.exports.reviewValidation = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
