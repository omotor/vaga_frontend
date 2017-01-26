import tuc from 'temp-units-conv'

class ForecastCtrl {
  /*@ngInject*/
  constructor () {
    const ctrl = this;
  }
  f2c (t) {
    return tuc.f2c(t).toFixed(0);
  }
}

export default ForecastCtrl;
