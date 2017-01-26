export default class WeatherSvc {
  constructor() {
    this.apiURL = '/weather';
  }

  fetch () {
    return fetch(this.apiURL).then(_ => _.json());
  }
}
