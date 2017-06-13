const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  //request function takes two arguments
  //1. options object
  //2. callback function triggered once data comes back from options object
  //https://www.npmjs.com/package/request
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      //console.log('Unable to connect to Google servers');
      callback('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      //console.log('Unable to find that address');
      callback('Unable to find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitide: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
