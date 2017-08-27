(function () {
  'use strict'
  const app = angular.module('root')

  function navController () {
    console.log(`Hello from nav controller`)
  }

  app
   .controller('navController', navController)
})()
