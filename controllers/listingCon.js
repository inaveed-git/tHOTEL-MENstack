

const Listing = require("../models/listing");
const reviews = require("../models/review");



// Route to handle category filtering
// app.get('/listings/category/:category', async (req, res) => {
//   const category = req.params.category;
//   const listings = await Listing.find({ category: category });
//   res.render('index', { showListing });
// });

// Route to display all listings when the page is initially loaded
// app.get('/listings', async (req, res) => {
//   const listings = await Listing.find();
//   res.render('index', { showListing });
// });


// module.exports.cate = async(req , res)=>{
//   const category = req.params.category;
//   const showListing = await Listing.find({ category: category });
//   res.render('listings/index.ejs', { showListing });
// }



module.exports.index = async (req, res) => {
  try {
    const showListing = await Listing.find({});
    res.render("listings/index.ejs", { showListing });
  } catch (error) {
    console.error("Error fetching listings:", error);
    req.flash("error", "Failed to fetch listings.");
    res.redirect("/");
  }
};




module.exports.renderNewListingForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing does not exist!");
      return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
  } catch (error) {
    next(error);
  }
};

module.exports.createListing = async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);

    if (req.file) {
      const url = req.file.path;
      const filename = req.file.filename;
      newListing.imageUpload = { url, filename };
    }
    


    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Listing saved successfully!");
    res.redirect("/listings");
  } catch (error) {
    console.error("Error creating listing:", error);
    req.flash("error", "Failed to create listing.");
    res.redirect("/listings/new");
  }
};



module.exports.cate = async (req, res) => {
  try {
      const category = req.params.category;
      const showListing = await Listing.find({ category: category });
      res.render("listings/index", { showListing });
  } catch (error) {
      console.error("Error fetching listings by category:", error);
      req.flash("error", "Failed to fetch listings by category.");
      res.redirect("/listings");
  }
}

module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "List  not exist!");
    res.redirect("/listings");
  } else {
    let uploadimage = listing.imageUpload.url;
    let image = listing.image;
    if (uploadimage  ) {
      uploadimage = uploadimage.replace("upload", "upload/w_500/q_auto/f_auto/");

    }
    res.render("listings/edit.ejs", { listing, uploadimage  , image});
  }
};

module.exports.updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    listing.title = req.body.listing.title;
    listing.description = req.body.listing.description;
    listing.price = req.body.listing.price;
    listing.location = req.body.listing.location;
    listing.country = req.body.listing.country;

    if (req.file) {
      listing.imageUpload.url = req.file.path;
      listing.imageUpload.filename = req.file.filename;
    }

    if (req.body.listing.image) {
      listing.image = req.body.listing.image;
      listing.imageUpload = undefined;
    }

    await listing.save();
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error("Error updating listing:", error);
    req.flash("error", "Failed to update listing.");
    res.redirect(`/listings/${id}/edit`);
  }
};

module.exports.destoryListing = async (req, res) => {
  try {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
  } catch (error) {
    console.error("Error deleting listing:", error);
    req.flash("error", "Failed to delete listing.");
    res.redirect("/listings");
  }
};
