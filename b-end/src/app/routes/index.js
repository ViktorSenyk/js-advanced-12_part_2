const Router = require('express').Router;

const country = require('./country');
const hotels = require('./hotels');
const airlines = require('./airlines');
const tour = require('./tour');

module.exports = () => {
  const routing = Router();

  routing.use('/countries', country());
  routing.use('/hotels', hotels());
  routing.use('/airlines', airlines());
  routing.use('/tour', tour());

  return routing;
}