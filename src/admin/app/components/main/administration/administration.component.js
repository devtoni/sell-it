/* global angular */
(function () {
  'use strict'
  var administration = {
    templateUrl: 'admin/app/components/main/administration/administration.html',
    controller: 'administrationController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('administration', administration)
})()
