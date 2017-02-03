(function() {
  'use strict';

  angular
    .module('vagaFrontend')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/wheather',{
        templateUrl: 'app/weather/views/mainWeather.html',
        controller: 'WeatherController',
        controllerAs: 'weather'
      })
      .otherwise({
        redirectTo: '/wheather'
      });
  }

})();
