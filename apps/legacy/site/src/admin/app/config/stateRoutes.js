(function () {
  'use strict'
  angular
    .module('adminApp')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('', '/')
      var states = [{
        name: 'login',
        url: '/',
        template: '<login></login>',
        data: {
          authorization: false
        }
      },
      {
        name: 'administration',
        url: '/administration',
        template: '<administration></administration>',
        data: {
          authorization: true
        }
      },
      {
        name: 'dashboard',
        url: '/dashboard',
        template: '<dashboard></dashboard>',
        data: {
          authorization: true
        }
      },
      {
        name: 'configuration',
        url: '/configuration',
        template: '<configuration></configuration>',
        data: {
          authorization: true
        }
      }
      ]
      states.forEach(function (state) {
        $stateProvider.state(state)
      })
    })
})()
