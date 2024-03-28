const express = require("express");
const route = express.Router();
const { wrapAsync } = require("../utils/wrapAsync.js");
const { loggedIn, isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware/validation/ListingValidation.js");
const listingController = require("../controllers/listingCon.js");
const { storage } = require("../cloudConfig.js");
const multer = require('multer');
const upload = multer({ storage });

route.get("/" , (req , res)=>{
    res.redirect("/listings")
})

// Listings Routes
route.route("/listings")
    .get(wrapAsync(listingController.index))
    .post(upload.single('listing[imageUpload]'), loggedIn, wrapAsync(listingController.createListing));

    route.get("/listings/category/:category", listingController.cate); // Route for category filtering

    // route.get("/listings/category/:category")
    // .get(listingController.cate)
// New Listing Form
route.get("/listings/new", loggedIn, listingController.renderNewListingForm);

// Edit Listing Form
route.get("/listings/:id/edit", loggedIn, isOwner, wrapAsync(listingController.editListing));

// Specific Listing Routes
route.route("/listings/:id")
    .get(wrapAsync(listingController.showListing))
    .put(upload.single('listing[imageUpload]'), loggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
    .delete(loggedIn, isOwner, wrapAsync(listingController.destoryListing));

module.exports = route;
