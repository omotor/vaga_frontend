import 'whatwg-fetch';

import angular from 'angular';
import forecast from './forecast';
import router from 'angular-route';
import weather from './weather';

export const app = angular.module('sitexWeather', [
  'templates',
  router,
  weather.name,
  forecast.name
]);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<weather weather="$resolve.weather"></weather>',
    resolve: {
      weather: (WeatherSvc) => {
        'ngInject';
        return WeatherSvc.fetch();
      }
    }
  });
});

angular.element(document).ready(() => {
  angular.bootstrap(document, ['sitexWeather']);
});

export default app;
