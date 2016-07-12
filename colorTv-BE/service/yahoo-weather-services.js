var YQL = require('yql');
var q = require('q');

function buildWeatherQuery(location, unitCode) {
    return new YQL('select * from weather.forecast where (woeid = ' + location + ')');
}

function getWeatherDataForCity(zipCode) {

    var query = buildWeatherQuery(zipCode);
    var deffered = q.defer();
    query.exec(function (err, data) {
        if (err) {
            deffered.reject(err);
            throw err;
        }
       var weatherData = {
            location: data.query.results.channel.location,
            condition: data.query.results.channel.item.condition,
            wind: data.query.results.channel.wind,
            forecast: data.query.results.channel.item.forecast,
            atmosphere: data.query.results.channel.atmosphere,
            astronomy: data.query.results.channel.astronomy
        };
        deffered.resolve(weatherData);
    });
    return deffered.promise;
}

function getWeatherForMultipleCities(zipCodesArray) {
    zipCodesArray = JSON.parse(zipCodesArray);
  var  promises = [];
    for (var i = 0; i < zipCodesArray.length; i++) {
        promises.push(getWeatherDataForCity(zipCodesArray[i]));
    }
    return q.all(promises);
}


module.exports = {
    getWeatherDataForCity: getWeatherDataForCity,
    getWeatherForMultipleCities: getWeatherForMultipleCities
};
