const express = require('express');
const route = express.Router();

const controller = require('../components/shared/controllers/hotels');

module.exports = () => {
  route.get('/get', controller.getHotels);

  return route;
}