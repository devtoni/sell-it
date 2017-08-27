(function () {
  'use strict'
  const app = angular.module('adminApp')

  function sidenavController () {
    console.log('Hola desde sidenav')
  }
  app.controller('sidenavController', sidenavController)
})()
