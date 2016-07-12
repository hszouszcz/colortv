angular.module('app.directives').directive('dailyWeatherBox', function (WeatherCodesService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/daily-weather-box/template.html',
        scope: {
            weatherData: '='
        },
        link: function (scope, element) {
            scope.$watch('weatherData', function () {
                if (scope.weatherData != null) {
                    scope.icon = WeatherCodesService.setWeatherIcon(scope.weatherData.condition.code);

                    var i = $(element).find('.main').find('.conditions').find('.icon').find('i');
                    if (i) {
                        $(i).remove();
                    }

                    $(element).find('.main').find('.conditions').find('.icon').append(scope.icon);
                }
            });

        }
    }
});