app.post("/listings/:id/review" ,async (req  , res)=>{
   
  let listing = await Listing.findById(req.params.id);


  let newReview  = new Review(req.body.review);
console.log(newReview)
listing.reviews.push(newReview);



await listing.save();
await newReview.save();

 res.redirect(`/listings/${listing._id}`)
})