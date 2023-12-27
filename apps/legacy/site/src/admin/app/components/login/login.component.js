/* global angular */
(function () {
  'use strict'
  var login = {
    templateUrl: 'admin/app/components/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('login', login)
})()
