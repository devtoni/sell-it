/* global angular */
(function () {
  'use strict'
  var dashboard = {
    templateUrl: 'admin/app/components/main/dashboard/dashboard.html',
    controller: 'dashboardController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('dashboard', dashboard)
})()
