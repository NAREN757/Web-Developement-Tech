
const mongoose = require("mongoose");
const crypto = require("crypto");

const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/aethera";

const demoNames = [
  "Alex Morgan",
  "David Wilson",
  "Sophia Bennett",
  "Emma Carter",
  "James Anderson",
  "Olivia Parker",
  "Daniel Brooks",
  "Isabella Reed",
  "Liam Foster",
  "Mia Collins",
  "Noah Mitchell",
  "Ava Thompson",
  "Ethan Cooper",
  "Grace Phillips",
  "Lucas Bailey",
  "Chloe Richardson",
  "Ryan Hughes",
  "Lily Stewart",
  "Benjamin Ward",
  "Ella Morris",
  "Samuel Turner",
  "Zoe Patterson",
  "Henry Cook",
  "Amelia Rogers",
  "Jack Murphy",
  "Emily Kelly",
  "Matthew Price",
  "Charlotte Gray",
  "Nathan Bell",
  "Hannah Wood",
  "Oliver Barnes",
  "Aria Bennett",
  "William Scott",
  "Freya Adams",
  "Leo Jenkins",
  "Sophie Russell",
  "Thomas Evans",
  "Ruby Coleman",
  "Adam Fisher",
  "Lucy Harrison",
];

function makeUsername(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

const reviewTemplates = [
  {
    rating: 5,
    comment: (listing) =>
      `${listing.title} looks like a lovely place to unwind. The setting in ${listing.location} makes it an appealing option for a getaway.`,
  },
  {
    rating: 4,
    comment: (listing) =>
      `I really like the location in ${listing.location}. I'd check the amenities and transport options before planning a visit.`,
  },
  {
    rating: 5,
    comment: (listing) =>
      `This property caught my attention. ${listing.title} looks like an interesting option for exploring ${listing.country}.`,
  },
  {
    rating: 3,
    comment: (listing) =>
      `The property looks promising, although I'd want more information about the facilities, transport, and check-in arrangements.`,
  },
  {
    rating: 4,
    comment: (listing) =>
      `The location in ${listing.location} sounds appealing. I'd keep this property in mind while comparing places to stay.`,
  },
  {
    rating: 2,
    comment: (listing) =>
      `There is potential here, but I'd want clearer details about the amenities and any additional costs before making a decision.`,
  },
  {
    rating: 5,
    comment: (listing) =>
      `${listing.title} stands out as an interesting place to consider for a trip to ${listing.country}.`,
  },
];

async function getDemoUsers() {
  const users = [];

  for (const name of demoNames) {
    const username = makeUsername(name);
    const email = `${username}@example.com`;

    let user = await User.findOne({ username });

    if (!user) {
      user = new User({ username, email });

      const temporaryPassword = crypto.randomBytes(24).toString("hex");

      user = await User.register(user, temporaryPassword);
    }

    users.push(user);
  }

  return users;
}

function getRandomReviewDate() {
  const date = new Date();

  // Random date between 1 and 180 days ago.
  const daysAgo = Math.floor(Math.random() * 180) + 1;

  date.setDate(date.getDate() - daysAgo);
  date.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60),
    0,
  );

  return date;
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

async function seedReviews() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to Aethera database.");

    const listings = await Listing.find({});

    if (listings.length === 0) {
      console.log("No listings found. Nothing to seed.");
      return;
    }

    const demoUsers = await getDemoUsers();

    // Remove previously seeded reviews only.
    // Genuine user reviews are preserved.
    const previousDemoReviews = await Review.find({ isDemo: true })
      .select("_id")
      .lean();

    const previousDemoIds = previousDemoReviews.map(
      (review) => review._id,
    );

    if (previousDemoIds.length > 0) {
      await Listing.updateMany(
        {},
        { $pull: { reviews: { $in: previousDemoIds } } },
      );

      await Review.deleteMany({ isDemo: true });
    }

    let totalCreated = 0;

    for (const listing of listings) {
      const reviewCount = 6 + Math.floor(Math.random() * 2);

      const selectedTemplates = shuffle(reviewTemplates).slice(
        0,
        reviewCount,
      );

      const selectedUsers = shuffle(demoUsers).slice(
        0,
        reviewCount,
      );

      for (let i = 0; i < reviewCount; i++) {
        const template = selectedTemplates[i];
        const author = selectedUsers[i];

        const review = await Review.create({
          comment: template.comment(listing),
          rating: template.rating,
          author: author._id,
          isDemo: true,
          createdAt: getRandomReviewDate(),
        });

        listing.reviews.push(review._id);
        totalCreated++;
      }

      await listing.save();

      console.log(`Added reviews to: ${listing.title}`);
    }

    console.log(
      `Finished: created ${totalCreated} sample reviews across ${listings.length} listings.`,
    );
  } finally {
    await mongoose.disconnect();
  }
}

seedReviews().catch((error) => {
  console.error("Review seeding failed:", error);
  process.exitCode = 1;
});
