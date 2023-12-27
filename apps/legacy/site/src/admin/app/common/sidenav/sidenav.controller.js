(function () {
  'use strict'
  const app = angular.module('adminApp')

  function sidenavController ($rootScope) {
    console.log($rootScope)
  }
  app.controller('sidenavController', [sidenavController])
})()
