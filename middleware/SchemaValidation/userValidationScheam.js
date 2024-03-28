const Joi = require("joi");

module.exports.userScheamLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports.userScheamsigin = Joi.object({
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});
