/* global angular */
(function () {
  'use strict'
  var activeUsers = {
    templateUrl: 'admin/app/components/main/dashboard/active-users/active-users.html',
    controller: 'activeUsersController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('activeUsers', activeUsers)
})()
