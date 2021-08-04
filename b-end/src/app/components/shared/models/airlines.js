const mongoose = require('mongoose');

const airline = mongoose.Schema({
  companyName: String,
  goFrom: String,
  goTo: String,
  flightDate: Date
})

const Airlines = mongoose.model('airlines', airline);

module.exports = Airlines;