(function () {
  'use strict';

  /**
   * @Template service code:
   */

  var extend = angular.extend;
  var jqLite = angular.element;

  angular.module('nx.widget').factory('nxTimeago', [
    '$rootScope',
    '$timeout',
    '$compile',
    '$sce',
    function ($rootScope, $timeout, $compile, $sce) {

      return {
        format: format
      };

      function format(inTime) {
        return inTime;
      }

    }]);
})();
