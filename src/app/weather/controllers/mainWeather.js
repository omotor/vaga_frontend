(function() {
  'use strict';

  angular
    .module('vagaFrontend')
    .controller('WeatherController', WeatherController)
    /** @ngInject */
    function WeatherController($scope, WeatherService, $interval, $translate, $timeout){
      var vm = this;
      vm.highestTemperatures = [];
      
      $interval(
        vm.getWeather = function(){
            var weatherPromisse = WeatherService.getWeatherSp();
            weatherPromisse.then(function(result){
              if(result.data.query.results){

                vm.forecast = result.data.query.results.channel.item.forecast;

                //Updates each value of forecast
                var itemsProcessed = 0;
                vm.forecast.forEach(function(element){
                  element.date = new Date(element.date);
                  $translate(element.code).then(function(text){
                    element.text = text;
                  });
                  element.celsius = vm.toCelsius(element.high);
                  $translate(element.day).then(function(text){
                    element.day = text;
                    itemsProcessed++;

                    if(itemsProcessed === vm.forecast.length) {
                      //call callback after all items are processed
                      vm.highestTemperatures = vm.searchHighestTemperatures(vm.forecast)
                      $timeout(vm.populateChart(vm.highestTemperatures), 3000);
                    }
                  });
                });

                vm.condition = result.data.query.results.channel.item.condition;
                vm.condition.celsius = vm.toCelsius(vm.condition.temp).toString();

                vm.locale = result.data.query.results.channel.location;
              }
            })
          .catch(function(){

          })
        }, 3000
      );

      vm.toCelsius = function(f) {
        return Math.floor((5/9) * (f-32));
      }

      vm.searchHighestTemperatures = function(forecast){
        //returns top 5 highest elements in array
        forecast.sort(function(a, b){
          //sorts the highest value
          if(a.high < b.high)
            return 1;
          if(a.high > b.high)
            return -1;
          return 0;
        });

        forecast.sort(function(a, b){
          if(a.date < b.date)
            return -1;
          if(a.date > b.date)
            return 1;
          return 0;
        })

        return forecast.slice(0, 5);
      }

      vm.populateChart = function(highestTemperatures){
        vm.data = highestTemperatures.map(function(e){
          return parseInt(e.high)
        });

        vm.labels = highestTemperatures.map(function(e){
          return e.day
        });
      }

    };
})();