const express = require("express");
const route = express.Router();
const { wrapAsync } = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {loggedIn , isReviewAuthor} = require("../middleware.js");
const {
  reviewValidation,
} = require("../middleware/validation/reviewValidation.js");
let reviewController = require("../controllers/reviewCon.js")


/// Add Review Route

route.post(
  "/listings/:id/review",
  loggedIn , 
  reviewValidation,
  wrapAsync(reviewController.createReview)
);

// Delete route for Review

route.delete(
  "/listings/:id/review/:reviewId",
  loggedIn ,isReviewAuthor , 
  wrapAsync(reviewController.destoryReview)
);

module.exports = route;
