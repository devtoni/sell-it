(function () {
  'use strict'
  const app = angular.module('adminApp')

  function categoriesController (ApiService) {
    const self = this
    console.log('Hello')
  }
  app.controller('categoriesController', ['ApiService', categoriesController])
})()
