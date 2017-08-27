(function () {
  'use strict'
  const app = angular.module('adminApp')

  function headerController () {
    console.log('Hola desde sidenav')
  }
  app.controller('headerController', headerController)
})()
