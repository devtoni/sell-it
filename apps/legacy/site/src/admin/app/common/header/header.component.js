/* global angular */
(function () {
  'use strict'
  var appHeader = {
    templateUrl: 'admin/app/common/header/header.html',
    controller: 'headerController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('appHeader', appHeader)
})()
