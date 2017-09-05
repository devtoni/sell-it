(function () {
  'use strict'
  const app = angular.module('adminApp')
  function totalProductsController (ApiService, ServiceChart) {
    const self = this
    ApiService.getProducts()
      .then((products) => {
        console.log(products)
        const canvas = angular.element('#canvas')
        ServiceChart.getDoughnutChar(canvas)
      })
      .catch((e) => console.log(e))
  }

  app.controller('totalProductsController', ['ApiService', 'ServiceChart', totalProductsController])
})()
