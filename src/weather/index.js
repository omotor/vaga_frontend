import Controller from './controller';
import angular from 'angular';

export const weather = angular.module('weather', []);

weather.controller('WeatherCtrl', Controller);

export default weather;
