/* global angular */
(function () {
  'use strict'

  function adminController ($routeParams) {
    console.log('Hello')
  }

  angular
    .module('root')
    .controller('adminController', adminController)
})()
