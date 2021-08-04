const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
  countryName: { type: String, required: true },
  city: { type: String, required: true },
  name: { type: String, required: true },
  availableFrom: { type: Date, required: true },
  availableUntil: { type: Date, required: true },
  availablePlaces: Number
});

const Hotel = mongoose.model('hotels', HotelSchema);

module.exports = Hotel;