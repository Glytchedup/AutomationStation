const mongoose = require("mongoose");
const db = require("../models");

// This file empties the hotels collection and inserts the hotels below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const hotelSeed = [
  {
    marsha: "BVUFI",
    // date: new Date(Date.now())
  },
  {
    marsha: "GEGFI",
    // date: new Date(Date.now())
  },
  {
    marsha: "SJCCC",
    // date: new Date(Date.now())
  },
  {
    marsha: "SJCJS",
    // date: new Date(Date.now())
  },
  {
    marsha: "SJCJR",
    // date: new Date(Date.now())
  },
  {
    marsha: "FSDSS",
    // date: new Date(Date.now())
  },
  {
    marsha: "FATCH",
    // date: new Date(Date.now())
  },
  {
    marsha: "FATRI",
    // date: new Date(Date.now())
  },
  {
    marsha: "SFOSB",
    // date: new Date(Date.now())
  },
  {
    marsha: "SFOFC",
    // date: new Date(Date.now())
  },
  {
    marsha: "SJCCA",
    // date: new Date(Date.now())
  },
  {
    marsha: "SLCSR",
    // date: new Date(Date.now())
  },
  
];

db.hotel
  .remove({})
  .then(() => db.hotel.collection.insertMany(hotelSeed))
  .then(data => {
    console.log(data.result.n + " hotels inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
