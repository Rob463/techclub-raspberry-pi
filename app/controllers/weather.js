const express = require('express'),
  request = require('request'),
  router = express.Router(),
  WeatherAPI = require('node-openweathermap');

const apiKey = '602d10eaa16056b9fe71e9d6693e44db';

module.exports = function (app) {
  app.use('/weather', router);
};

router.get('/:zipcode', function (req, res, next) {
let weather = new WeatherAPI(apikey);
  weather.getweather({
    location: req.paren('zipcode') + ',us' + temp_unit: 'F'
.then(response =>
});
