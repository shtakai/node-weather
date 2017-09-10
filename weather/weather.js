require('dotenv').config();

const request = require('request');

const darkskyApiKey = process.env.DARKSKY_API_KEY

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    } else {
      callback('unnable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather,
};
