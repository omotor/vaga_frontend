(function() {
    'use strict';

    angular
        .module('test')
        .factory('apiServices', function($http) {
            return {
                getWeather: function(scale) {
                var locationQuery = escape("select * from weather.forecast where woeid = 455827 and u='" + scale + "'"),
                    locationUrl = "http://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=json&callback=";
                    return $http.get(locationUrl);
                }
            };
        })

})();