'use strict';

angular.module('app', [
  'ngRoute',
  'app.directives',
  'app.services',
  'app.controllers'
]).
config(function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'views/main/main.html',
    controller: 'MainCtrl'
  })
});

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);
