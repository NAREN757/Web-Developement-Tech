const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/aethera";
const OWNER_ID = "6addb9a5e5b670bdfcda8f99";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to Aethera DB");

    // Delete existing listings from Aethera
    await Listing.deleteMany({});

    // Assign the new owner to every listing
    const initData = data.data.map((obj) => ({
      ...obj,
      owner: OWNER_ID,
    }));

    // Insert the updated listings
    await Listing.insertMany(initData);

    console.log(`${initData.length} Aethera listings initialized`);
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((err) => {
  console.error("Database initialization failed:", err);
  process.exitCode = 1;
});
