/* global angular */
(function () {
  'use strict'
  var chart = {
    templateUrl: 'admin/app/components/main/dashboard/chart/chart.html',
    controller: 'ChartCtrl',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('chart', chart)
})()
