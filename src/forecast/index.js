import Forecast from './forecast.comp';
import ForecastCtrl from './forecast.ctrl';
import angular from 'angular';

export const forecast = angular.module('Forecast', []);

forecast.component(Forecast.selector, Forecast);
forecast.controller('ForecastCtrl', ForecastCtrl);

export default forecast;
