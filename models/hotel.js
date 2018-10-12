const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  marsha: { type: String, required: true },
  IO: { type: String, required: true },
  description: String,
  title: { type: String, required: true },
  photo: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Hotel = mongoose.model("Hotel", hotelSchema);

const trivago = function(req, res) {
  var cmd = require('node-cmd');
  cmd.run(
    ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar calendar2',
    // function(err, data, stderr){
    // }
    );
  }
module.exports = Hotel;
