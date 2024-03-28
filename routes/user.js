const express = require("express");
const route = express.Router();
const { wrapAsync } = require("../utils/wrapAsync");
const passport = require("passport");
const {
  userValidationlogin,
} = require("../middleware/validation/userValidation.js");
const {
  userValidationSigin,
} = require("../middleware/validation/userValidation.js");
const { saveRedirectUrl } = require("../middleware.js");
let Usercontroller = require("../controllers/UserCon.js");

//signup routes
route
  .route("/signup")
  .get(Usercontroller.signUpFormRender)
  .post(userValidationSigin, wrapAsync(Usercontroller.signUP));

// login routes
route
  .route("/login")
  .get(Usercontroller.loginFormRender)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userValidationlogin,
    Usercontroller.login
  );

  //logout route
route.get("/logout", Usercontroller.logout);

module.exports = route;
