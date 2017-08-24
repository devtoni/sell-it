(function () {
  'use strict'
  const app = angular.module('root', ['ngRoute'])

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/hiuh', {
          template: '<h1>hoohhoho</h1>'
        })
  }])
})()
