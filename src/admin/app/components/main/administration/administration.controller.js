(function () {
  'use strict'
  const app = angular.module('adminApp')

  function administrationController () {
    console.log('Hola desde admin')
  }
  app.controller('administrationController', administrationController)
})()
