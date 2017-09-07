(function () {
  'use strict'
  const app = angular.module('adminApp')

  function tableController (ApiService) {
    const self = this
    ApiService.getProducts()
    .then((products) => {
      self.productsList = products.data.totalProduct
    })
    self.deleteBtn = function (e) {
      const id = e.currentTarget.dataset.id

      ApiService.deleteProduct(id)
    }
  }
  app.controller('tableController', ['ApiService', tableController])
})()
