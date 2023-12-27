/* global angular */
(function () {
  'use strict'
  var stats = {
    templateUrl: 'admin/app/components/main/dashboard/stats/stats.html',
    controller: 'StatsCtrl',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('stats', stats)
})()
