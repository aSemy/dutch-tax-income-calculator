import template from './ruling.html';
import constants from '../data.json'; // Get JSON containing calculation constants

let rulingComponent = {
  template,
  controller: function() {
    this.year = constants.currentYear;
    this.ruling = constants.rulingThreshold;
  }
};

export default rulingComponent;
