/* global angular */
(function () {
  'use strict'

  var appNav = {
    templateUrl: 'app/common/app-nav/app-nav.html',
    controller: 'navController',
    controllerAs: 'vm'
  }

  angular
        .module('root')
        .component('appNav', appNav)
})()
