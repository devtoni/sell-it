(function () {
  'use strict'
  angular
  .module('adminApp', ['ui.router', 'angular-jwt' ])
  .run(function ($rootScope, $location, StorageService, AuthService, $state) {
    if (AuthService.isLoggedIn()) {
      const token = StorageService.getToken()
      AuthService.setCredentials(token)
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var authorization = toState.data.authorization
      if (!AuthService.isLoggedIn() && authorization === true) {
        event.preventDefault()
        $state.go('login')
      }
    })
  })
})()
