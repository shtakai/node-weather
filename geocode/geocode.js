const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('unnable to connect to google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('unnable to find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
      });
    }
  });
};

module.exports = {
  geocodeAddress,
};

