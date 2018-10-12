import axios from "axios";

export default {
  // Gets all hotels
  getHotels: function() {
    return axios.get("/api/hotels");
  },
  // Gets the hotel with the given marsha
  getHotel: function(marsha) {
    return axios.get("/api/hotels/" + marsha);
  },
  // Deletes the hotel with the given marsha
  deleteHotel: function(marsha) {
    return axios.delete("/api/hotels/" + marsha);
  },
  // Saves a hotel to the database
  saveHotel: function(hotelData) {
    return axios.post("/api/hotels", hotelData);
  },
  trivago: function() {
    var cmd = require('node-cmd');
    cmd.run(
      ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar calendar2',
      function(err, data, stderr){
      }
);
  },
};
