(function() {
  'use strict';

  angular
    .module('vagaFrontend')
    .service('WeatherService', function($http){
      return{
        getWeatherSp: function(){
          return $http({
            method: 'GET',
            url: "http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid = '455827'&format=json&u=c"
          })
        }
      }

})

})();