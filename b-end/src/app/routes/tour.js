const express = require('express');
const route = express.Router();

const controller = require('../components/shared/controllers/tour');

module.exports = () => {
  route.get('/get', controller.orderTour);

  return route;
} 
