const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c385125a334f1bd8940094571ac18126/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      //console.log(body.currently.temperature);
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      //console.log('Unable to fetch weather');
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
