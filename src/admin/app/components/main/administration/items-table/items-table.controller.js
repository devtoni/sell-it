(function () {
  'use strict'
  const app = angular.module('adminApp')

  function tableController (ApiService) {
    const self = this
    ApiService.getProducts()
    .then((products) => {
      console.log(products)
      self.productsList = products.data
      self.now = +new Date()
    })
  }
  app.controller('tableController', ['ApiService', tableController])
})()
