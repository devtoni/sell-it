/* global angular */
(function () {
  'use strict'
  angular.module('root')

.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/administration', {
      templateUrl: 'admin/app/routes/administracion/template.html',
      controller: 'adminController',
      controllerAs: 'vm'
    })
  // $locationProvider.html5Mode(true)
})
})()
