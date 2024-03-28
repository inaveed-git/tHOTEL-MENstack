const {
  listingSchema,
} = require("../SchemaValidation/listingValidationSchema ");
const ExpressError = require("../../utils/ExpressError.js");

// Listing Validation middleware
module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
