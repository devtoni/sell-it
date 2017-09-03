(function () {
  'use strict'
  angular
  .module('adminApp', ['ui.router', 'angular-jwt' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/')
    var states = [
      {
        name: 'login',
        url: '/',
        template: '<login></login>'
      },
      {
        name: 'administration',
        url: '/administration',
        template: '<administration></administration>'
      },
      {
        name: 'dashboard',
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      },
      {
        name: 'configuration',
        url: '/configuration',
        template: '<configuration></configuration>'
      }
    ]
    states.forEach(function (state) {
      $stateProvider.state(state)
    })
  })
})()
