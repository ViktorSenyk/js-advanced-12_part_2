const hotel = require('../models/hotels');

const getHotels = () => {
  return hotel.find({}, { _id: 0 });
}

module.exports = {
  getHotels
}