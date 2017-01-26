import controller from './forecast.ctrl';
import template from './forecast.tmpl.html';

export const Forecast = {
  transclude: true,
  templateUrl: template,
  selector: 'forecast',
  bindings: {
    forecast: '<'
  },
  controller
};

export default Forecast;
