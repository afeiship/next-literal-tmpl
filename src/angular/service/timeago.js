(function() {
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
    function($rootScope, $timeout, $compile, $sce) {

      return function format(inValue) {
        var today = new Date();
        var publish = (new Date(String(inValue).replace(/-/g, '/')));
        var todayTs = today.getTime();
        var yesterdayTs = todayTs - 1000 * 60 * 60 * 24;
        var publishTs = publish.getTime();
        var isToday = publish.getDate() == today.getDate();
        var isYesterday = new Date(yesterdayTs).getDate() === publish.getDate();
        var isYear = publish.getYear() == today.getYear();

        var diff_s = (todayTs - publishTs) / 1000;
        var diff_m = diff_s / 60;
        var diff_h = diff_m / 60;

        switch (true) {
          case diff_s < 60:
            return '刚刚';
          case diff_m < 60:
            return Math.ceil(diff_m) + '分钟前';
          case isToday && diff_h < 24:
            return Math.ceil(diff_h) + '小时前';
          case isYesterday:
            return '昨天' + inValue.slice(11, -3);
          case isYear:
            return inValue.slice(-14, -3);
          default:
            return inValue.slice(0, 10);
        }
      }

    }
  ]);
})();
