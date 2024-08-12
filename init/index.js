require("dotenv").config();
const mongoose = require("mongoose");

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGODB_URI;

main()
  .then(() => {
    console.log("connected to index DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: "6694ce4bc4b56f9c0d3d71dd",}))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
