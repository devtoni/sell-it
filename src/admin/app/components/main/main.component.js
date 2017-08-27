/* global angular */
(function () {
  'use strict'
  var appMain = {
    templateUrl: 'admin/app/components/main/main.html',
    controller: 'mainController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('appMain', appMain)
})()
