(function () {
  'use strict'
  const app = angular.module('root', ['ngRoute'])
  app.run(() => console.log('HEllo from Angular'))
})()
