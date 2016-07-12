var weatherService = require('../service/yahoo-weather-services');

function getWeatherDataFromYahooAPI(req, reply) {
    weatherService.getWeatherDataForCity(req.query.zipCode).then(function (response) {
        reply(response);
    })
};

function getWeatherForMultipleCities(request, reply) {
    weatherService.getWeatherForMultipleCities(request.query.zipCodes).then(function (response) {
        reply(response);
    })

};

module.exports = {
    getWeatherDataFromYahooAPI: getWeatherDataFromYahooAPI,
    getWeatherForMultipleCities: getWeatherForMultipleCities
};