/* global angular */
(function () {
  'use strict'
  var appSidebar = {
    templateUrl: 'admin/app/common/sidenav/sidenav.html',
    controller: 'sidenavController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('appSidebar', appSidebar)
})()
