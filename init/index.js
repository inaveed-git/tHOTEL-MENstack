const mongoose = require("mongoose");

let data = require("./data.js");
let listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/tplace");
}

const initDB = async () => {
  data.data = data.data.map((obj) => ({
    ...obj,
    owner: "65f171f03cd62fd5791f01c6",
  }));
  await listing.insertMany(data.data);
};

initDB();
