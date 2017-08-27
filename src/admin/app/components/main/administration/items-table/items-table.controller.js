(function () {
  'use strict'
  const app = angular.module('adminApp')

  function tableController () {
    console.log('Hola desde table')
  }
  app.controller('tableController', tableController)
})()
