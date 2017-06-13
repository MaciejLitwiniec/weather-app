const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'adress to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

//passing arrow function which will be called after request comes back
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    //"2" is spacing for better formatting
    //console.log(JSON.stringify(results, undefined, 2));
    console.log(results.address);
    weather.getWeather(results.latitide, results.longitude, (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          //console.log(JSON.stringify(weatherResults, undefined, 2));
          console.log(`It's currently ${weatherResults.temperature}. Feels like ${weatherResults.apparentTemperature}.`);
        }
    });
  }
});
