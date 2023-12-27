(function () {
  'use strict'

  const app = angular.module('adminApp')

  function LoginCtrl (toaster, $location, AuthService, $log) {
    if (!AuthService.isLoggedIn()) $location.path('/')
    const self = this
    self.credentials = {
      username: '',
      password: ''
    }

    self.login = function (credentials) {
      AuthService.login(credentials)
        .then(res => {
          toaster.pop('success', 'Welcome!', 'Succesfully Login')
          $location.path('/administration')
        })
        .catch(err => {
          $log.log(err)
        })
    }
  }

  app
  .controller('LoginCtrl', ['toaster', '$location', 'AuthService', '$log', LoginCtrl])
})()
