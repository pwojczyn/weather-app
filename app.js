const yargs = require('yargs');

var fahrenheitToCelsius = require('fahrenheit-to-celsius');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                var resultTemp = fahrenheitToCelsius(weatherResults.temperature);
                var feelTemp = fahrenheitToCelsius(weatherResults.apparentTemperature);
                console.log(`It's currently ${resultTemp}. It feels like ${feelTemp}.`);
            }
        });
    }
});