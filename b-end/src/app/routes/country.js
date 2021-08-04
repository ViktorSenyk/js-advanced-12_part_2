const express = require('express');
const route = express.Router();

const controller = require('../components/shared/controllers/country');

module.exports = () => {
  route.get('/get', controller.getCountries);

  return route;
}