import axios from "axios";

export default {
  // Gets all hotels
  getHotels: function () {
    return axios.get("/api/hotels")
    // .then(response => console.log('axios /hotels'));

  },
  // Gets the hotel with the given marsha
  getHotel: function (marsha) {
    return axios.get("/api/hotels/" + marsha);
  },
  // Deletes the hotel with the given marsha
  deleteHotel: function (marsha) {
    return axios.delete("/api/hotels/" + marsha);
  },
  // Saves a hotel to the database
  saveHotel: function (hotelData) {
    return axios.post("/api/hotels", hotelData);
  },

  trivago:  () => {
    console.log('test trivago');
     return axios.get("api/trivago")
  }

}