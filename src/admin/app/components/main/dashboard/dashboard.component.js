/* global angular */
(function () {
  'use strict'
  var dashboard = {
    bindings: {
      speakers: '<'
    },
    templateUrl: 'admin/app/components/main/dashboard/dashboard.html',
    controller: ['DataService', function (DataService) {
      console.log('Hola from controller')
    }]
  }

  angular
        .module('adminApp')
        .component('dashboard', dashboard)
})()
