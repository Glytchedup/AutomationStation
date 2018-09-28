const mongoose = require("mongoose");
const db = require("../models");

// This file empties the hotel collection and inserts the hotel below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reacthotellist"
);

const hotelSeed = [
  {
    marsha: "FATCH",
    IO: "Yes",
    synopsis:
      "AK",
    date: new Date(Date.now())
  },
  {
    marsha: "BVUFI",
    IO: "Yes",
    synopsis:
      "WA",
    date: new Date(Date.now())
  },
  {
    marsha: "GEGFI",
    IO: "Yes",
    synopsis:
      "WA",
    date: new Date(Date.now())
  },
 ];

db.Hotel
  .remove({})
  .then(() => db.Hotel.collection.insertMany(hotelSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
