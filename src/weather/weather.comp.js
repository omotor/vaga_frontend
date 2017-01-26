import controller from './weather.ctrl';
import template from './weather.tmpl.html';

export const Weather = {
  transclude: true,
  templateUrl: template,
  selector: 'weather',
  bindings: {
    weather: '<'
  },
  controller
};

export default Weather;
