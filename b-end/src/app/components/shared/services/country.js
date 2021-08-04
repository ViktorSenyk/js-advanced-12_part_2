const country = require('../models/country');

const getCountries = () => {
  return country.find({}, { _id: 0 });
}

module.exports = {
  getCountries
}