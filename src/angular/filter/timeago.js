(function() {
  'use strict';

  /**
   * @Template filter code:
   */

  var extend = angular.extend;
  var jqLite = angular.element;

  angular.module('nx.widget')
    .filter('nxToTimeago', nxToTimeago);

  function nxToTimeago(nxTimeago) {
    return function (inTime) {
      return nxTimeago(inTime);
    }
  }

})();
