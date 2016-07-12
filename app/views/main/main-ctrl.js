angular.module('app.controllers').controller('MainCtrl', ['$scope', 'DataService', function ($scope, DataService) {

    $scope.data = {};
    $scope.dataToDisplay = {};
    $scope.data = null;
    $scope.cities = [
        {
            city: 'San Diego',
            region: "CA",
            country: "United States",
            zipCode: 2487889
        },
        {
            city: "Nome",
            region: "AK",
            country: "United States",
            zipCode: 2460286
        },
        {
            city: "Los Angeles",
            region: "CA",
            country: "United States",
            zipCode: 2442047
        }
    ];
    $scope.selectedItem = null;
   // DataService.getData(zipCodes).then(function (result) {
   //     $scope.data = result.data;
   //     //$scope.cities = DataService.getLocations($scope.data);
   // });

}]);