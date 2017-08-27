(function () {
  'use strict'
  const app = angular.module('adminApp')

  function configurationController () {
    console.log('Hola desde config')
  }
  app.controller('configurationController', configurationController)
})()
