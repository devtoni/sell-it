(function () {
  'use strict'

  angular.module('adminApp').config(addInterceptor)

  function addInterceptor ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  addInterceptor.$inject = ['$httpProvider']
})()
