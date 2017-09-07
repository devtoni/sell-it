(function () {
  'use strict'
  function headerController (AuthService, $location, toaster) {
    const self = this
    self.logout = function () {
      AuthService.logout()
        .then(function () {
          toaster.pop('info', 'Good Bye!', 'Succesfully Logout')
          $location.path('/')
        })
        .catch(() => console.log('there was an error tying to logout'))
    }
  }
  angular
        .module('adminApp')
        .controller('headerController', [ 'AuthService', '$location', 'toaster', headerController ])
})()
