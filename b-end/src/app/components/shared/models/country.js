const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
  name: { type: String, required: true },
  travelStatus: { type: Boolean, default: true }
});

const Country = mongoose.model('country', CountrySchema);

module.exports = Country;