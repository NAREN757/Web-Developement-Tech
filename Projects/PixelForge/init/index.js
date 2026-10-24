const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/pixelforge";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const initData = data.data.map((obj) => ({
    ...obj,
    owner: "6adc246ff3e1fa1e70b890c7",
  }));

  await Listing.insertMany(initData);
  console.log("Data was initialized");
};

initDB();
