const airline = require('../models/airlines');

const getAirlines = (arr) => {
  return airline.find({ goTo: { $in: arr } }, { _id: 0 });
}

module.exports = {
  getAirlines
}