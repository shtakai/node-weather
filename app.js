const request = require('request');

request({
  url: 'http://maps.google.com/maps/api/geocode/json?address=wad%20ched%20yod',
  json: true,
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
