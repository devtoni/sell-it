(function () {
  'use strict'
  const app = angular.module('root')

  app
     .config(function ($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.when('', '/panel')
       var states = [
         {
           name: 'root',
           url: '/hihi',
           template: '<root></root>'
         },
         {
           name: 'panel',
           url: '/panel',
           template: '<app-nav></app-nav>'
         }
       ]
       states.forEach(function (state) {
         $stateProvider.state(state)
       })
     })
})()
