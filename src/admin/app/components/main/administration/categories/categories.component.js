/* global angular */
(function () {
  'use strict'
  var categories = {
    templateUrl: 'admin/app/components/main/administration/categories/categories.html',
    controller: 'categoriesController',
    controllerAs: 'vm'
  }
  angular
        .module('adminApp')
        .component('categories', categories)
})()
