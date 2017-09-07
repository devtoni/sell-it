(function () {
  'use strict'
  function tableController (ApiService, toaster, $location) {
    const self = this
    ApiService.getProducts()
    .then((products) => {
      self.productsList = products.data.totalProduct
    })
    self.deleteBtn = function (e) {
      const id = e.currentTarget.dataset.id
      ApiService.deleteProduct(id)
      .then(response => {
        toaster.pop('success', 'Product Deleted')
        $location.path('/administration')
      })
    }
  }
  angular
       .module('adminApp')
       .controller('tableController', ['ApiService', 'toaster', '$location', tableController])
})()
