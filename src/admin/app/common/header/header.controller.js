(function () {
  'use strict'
  const app = angular.module('adminApp')

  function headerController (AuthService, $location, FlashMessageService) {
    const self = this
    self.logout = function () {
      AuthService.logout()
        .then(function () {
          FlashMessageService.setMessage('Successfully logged out')
          $location.path('/')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
  app.controller('headerController', [ 'AuthService', '$location', 'FlashMessageService', headerController])
})()
