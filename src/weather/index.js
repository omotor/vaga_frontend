import Weather from './weather.comp';
import WeatherCtrl from './weather.ctrl';
import WeatherSvc from './weather.svc';
import angular from 'angular';

export const weather = angular.module('weather', []);

weather.component(Weather.selector, Weather);
weather.controller('WeatherCtrl', WeatherCtrl);
weather.service('WeatherSvc', WeatherSvc);

export default weather;
