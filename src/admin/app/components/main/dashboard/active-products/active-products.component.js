/* global angular */
(function () {
  'use strict'
  var activeProducts = {
    templateUrl: 'admin/app/components/main/dashboard/active-products/active-products.html',
    controller: 'activeProductsController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('activeProducts', activeProducts)
})()
