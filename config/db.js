// const mongoose = require("mongoose");


// if(process.env.NODE_ENV != "production"){
//   require('dotenv').config()
// }

// const url = process.env.ATLASDB_URL;


// main()
//   .then((result) => {
//     console.log("Connected mongo");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(url);
// }




const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
  try {
    const DB_URL = process.env.DB_URL;
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToDatabase;
