/* global angular */
(function () {
  'use strict'
  angular.module('root')

.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'admin/app/routes/dashboard/template.html',
      controller: 'dashboardController',
      controllerAs: 'vm'
    })
  // $locationProvider.html5Mode(true)
})
})()
