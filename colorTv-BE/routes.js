const Ctrl = require('./controller/yahoo-weather-controller');

module.exports = [
    {method: 'GET', path: '/single', handler: Ctrl.getWeatherDataFromYahooAPI},
    {method: 'GET', path:'/many', handler:Ctrl.getWeatherForMultipleCities}
    //{method: 'GET', path: '/', handler: Ctrl.loadIndexPage}
];
