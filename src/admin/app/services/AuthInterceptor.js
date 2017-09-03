(function () {
  'use strict'

  angular.module('adminApp')
    .factory('AuthInterceptor', AuthInterceptor)

  function AuthInterceptor (StorageService) {
    function addToken (config) {
      const token = StorageService.getToken()
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = 'JWT ' + token
      }
      return config
    }

    return {
      request: addToken
    }
  }

  AuthInterceptor.$inject = ['StorageService']
})()
