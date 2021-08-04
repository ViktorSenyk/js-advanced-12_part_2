const express = require('express');
const route = express.Router();

const controller = require('../components/shared/controllers/airlines');

module.exports = () => {
  route.post('/get', controller.getAirlines);

  return route;
}