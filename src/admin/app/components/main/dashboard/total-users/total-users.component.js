/* global angular */
(function () {
  'use strict'
  var totalUsers = {
    templateUrl: 'admin/app/components/main/dashboard/total-users/total-users.html',
    controller: 'totalUsersController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('totalUsers', totalUsers)
})()
