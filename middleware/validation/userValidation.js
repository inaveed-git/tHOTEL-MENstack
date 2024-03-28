const { userScheamLogin } = require("../SchemaValidation/userValidationScheam");

const ExpressError = require("../../utils/ExpressError.js");

//User validation middleware for login
module.exports.userValidationlogin = (req, res, next) => {
  const { error } = userScheamLogin.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

const { userScheamsigin } = require("../SchemaValidation/userValidationScheam");

//User Validation middleware for Sigin
module.exports.userValidationSigin = (req, res, next) => {
  const { error } = userScheamsigin.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
