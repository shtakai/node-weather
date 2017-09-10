const request = require('request');

request({
  url: 'https://maps.google.com/maps/api/geocode/json?address=wad%20ched%20yod',
  json: true,
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`lat: ${body.results[0].geometry.location.lat}`);
  console.log(`lng: ${body.results[0].geometry.location.lng}`);
});
