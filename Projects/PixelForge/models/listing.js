const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://play-lh.googleusercontent.com/YYVSheYAWor2tJJ0PS-t7pJ7DkXRoYMcg60qKF5dixA91F4Ixh1ykid27DAHi3U_mA",
    set: (v) =>
      v === ""
        ? "https://image.api.playstation.com/vulcan/ap/rnd/202607/2810/8ea15bce1b7336894aa364867c03a3ea32ecd2f1455a4333.png?w=1920"
        : v,
  },
  price: Number,
  developer: String,
  genre: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
