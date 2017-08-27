(function () {
  'use strict'
  const app = angular.module('adminApp')

  function dashboardController () {
    console.log('Hola desde dashboard')
  }
  app.controller('dashboardController', dashboardController)
})()
