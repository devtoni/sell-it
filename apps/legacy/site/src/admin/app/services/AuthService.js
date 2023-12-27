(function () {
  'use strict'

  angular.module('adminApp')
    .factory('AuthService', AuthService)

  function AuthService ($http, $rootScope, StorageService, jwtHelper, $q) {
    function login ({email, password}) {
      return $http.post('/admin/login', { email, password })
          .then(response => response.data)
          .then(data => {
            StorageService.setToken(data.token)
            setCredentials(data.token)
            return data
          })
    }

    function isLoggedIn () {
      const token = StorageService.getToken()
      if (!token) return false
      return true
    }

    function logout () {
      console.log('logouting...')
      StorageService.removeToken()
      delete $rootScope.loggedUser
      delete $rootScope.loggedUserId
      return $q.resolve()
    }

    function setCredentials (token) {
      var tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload.username
      $rootScope.loggedUserId = tokenPayload.id
    }

    return { login, isLoggedIn, logout, setCredentials }
  }

  AuthService.$inject = ['$http', '$rootScope', 'StorageService', 'jwtHelper', '$q']
})()
