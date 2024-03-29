const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    imageUpload: {
        url: String,
        filename: String
    },
    image: {
        type: String,
        set: function(v) {
            if (this.imageUpload && this.imageUpload.url) {
                return this.imageUpload.url; // Use uploaded image URL if provided
            } else if (!v) {
                // If neither imageUpload nor v (image field) is provided
                return "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
            }
            return v; // Use the provided image URL
        }
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },  category: {
        type: String,
        // enum: ['Islands', 'Castles', 'Arctic' , 'Top of the world' , 'Mansions' , 'Historical homes' , 'Campers' , 'Amazing pools'] // Define your categories
        enum: ['islands' , 'castles' , 'arctic' , 'top-of-the-world' , 'historical-homes' , 'campus' , 'amazing-pools']
    } , 
    geometry : {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
