angular.module('app.services').factory('DataService', function ($http) {
    return {
        getData: function (zipCodes) {
           return $http.get('http://localhost:8000/many?zipCodes=' + zipCodes, {
               params: zipCodes
           }).success(function (result) {
                return result.data;
            })
                .error(function (error) {
                    throw (error);
                })
        },
        
        getDataForSingleCity: function(zipCode) {
            return $http.get('http://localhost:8000/single?zipCode=' + zipCode).success(function (result) {
                return result.data;
            })
                .error(function (error) {
                    throw(error);
                })
        },
        
        getLocations: function (data) {
            var locations = [];
            for(var i in data) {
                locations.push(data[i].location);
            }
            return locations;
        }
            
        
    }
});