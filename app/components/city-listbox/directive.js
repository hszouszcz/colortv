angular.module('app.directives').directive('cityListBox', function (DataService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/city-listbox/template.html',
        scope: {
            cities: '=',
            selectedItem: '=',
            data: "="
          
        },
        link: function (scope, element) {
           // scope.selected = undefined;
            scope.select = function (index) {
                scope.selectedItem = scope.cities[index];
                scope.selected = index;
            };

            scope.getWeatherForCity = function() {
                DataService.getDataForSingleCity(scope.selectedItem.zipCode)
                    .then(function (result) {
                    scope.data = result.data;
                });
            }
        }
    }
});