
const User = require("../models/user");

module.exports.signUpFormRender = (req, res) => {
    res.render("user/signup.ejs");
  };


  module.exports.signUP = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registerUser = await User.register(newUser, password);
      console.log("User Registered");
      req.login(registerUser, (err) => {
        if (err) {
          throw new ExpressError(400, "Some ERROR IN LOGIN");
        }
        req.flash("success", "Welcome to tHotel");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }




  module.exports.loginFormRender = (req, res) => {
    res.render("user/login.ejs");
  };

  module.exports.login =  (req, res) => {
    req.flash("success", "Welcome back to tHotel");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }



  module.exports.logout = (req, res) => {
    req.logout((err) => {
      if (err) {
        throw new ExpressError(400, "Some ERROR IN LOGOUT");
      }
  
      req.flash("success", "you have logout successfuly!");
      res.redirect("/listings");
    });
  }