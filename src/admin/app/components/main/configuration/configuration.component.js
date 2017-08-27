/* global angular */
(function () {
  'use strict'
  var configuration = {
    templateUrl: 'admin/app/components/main/configuration/configuration.html',
    controller: 'configurationController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('configuration', configuration)
})()
