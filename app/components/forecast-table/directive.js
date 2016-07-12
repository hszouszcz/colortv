angular.module('app.directives').directive('forecastTable', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/forecast-table/template.html',
        scope: {
            forecast: '='
        },
        link: function (scope, element) {
           
        }
    }
});