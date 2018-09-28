const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  marsha: { type: String, required: true },
  IO: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
