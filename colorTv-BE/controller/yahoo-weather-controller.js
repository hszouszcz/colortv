var weatherService = require('../service/yahoo-weather-services');

function getWeatherDataFromYahooAPI(req, reply) {
    "use strict";
   // var req = 2442047;
    weatherService.getWeatherDataForCity(req.query.zipCode).then(function (response) {
        reply(response);
    })
}

function getWeatherForMultipleCities(request, reply) {
   // var req2 = [2487889,  2460286, 2442047];
    weatherService.getWeatherForMultipleCities(request.query.zipCodes).then(function (response) {
        reply(response);
    })

}

module.exports = {
    getWeatherDataFromYahooAPI: getWeatherDataFromYahooAPI,
    getWeatherForMultipleCities: getWeatherForMultipleCities
};