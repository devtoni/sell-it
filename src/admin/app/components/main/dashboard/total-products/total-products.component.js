/* global angular */
(function () {
  'use strict'
  var totalProducts = {
    templateUrl: 'admin/app/components/main/dashboard/total-products/total-products.html',
    controller: 'totalProductsController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('totalProducts', totalProducts)
})()
