/* global angular */
(function () {
  'use strict'
  var itemsTable = {
    templateUrl: 'admin/app/components/main/administration/items-table/items-table.html',
    controller: 'tableController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('itemsTable', itemsTable)
})()
