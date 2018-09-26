import axios from "axios";

export default {
  // Gets all hotels
  getHotels: function() {
    return axios.get("/api/hotels");
  },
  // Gets the hotel with the given id
  getHotel: function(id) {
    return axios.get("/api/hotels/" + id);
  },
  // Deletes the hotel with the given id
  deleteHotel: function(id) {
    return axios.delete("/api/hotels/" + id);
  },
  // Saves a hotel to the database
  saveHotel: function(hotelData) {
    return axios.post("/api/hotels", hotelData);
  }
};
