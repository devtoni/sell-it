(function () {
  'use strict'

  const app = angular.module('adminApp')

  function LoginCtrl ($rootScope, $location, AuthService, $log, FlashMessageService) {
    if (!AuthService.isLoggedIn()) $location.path('/')
    const self = this
    self.credentials = {
      username: '',
      password: ''
    }

    self.login = function (credentials) {
      AuthService.login(credentials)
        .then(res => {
          $location.path('/administration')
        })
        .catch(err => {
          FlashMessageService.setMessage(err.data)
          $log.log(err)
        })
    }
  }

  app
  .controller('LoginCtrl', ['$rootScope', '$location', 'AuthService', '$log', 'FlashMessageService', LoginCtrl])
})()
