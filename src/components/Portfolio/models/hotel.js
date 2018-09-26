const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  marsha: { marsha: String, required: true },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
