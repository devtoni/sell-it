(function () {
  'use strict'
  const app = angular.module('adminApp')

  function mainController () {
    console.log('Hola desde main')
  }
  app.controller('mainController', mainController)
})()
