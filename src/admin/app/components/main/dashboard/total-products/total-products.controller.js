(function () {
  'use strict'
  const app = angular.module('adminApp')
  function totalProductsController (DataService, ServiceChart) {
    const self = this
    DataService.getProducts()
      .then((products) => {
        console.log(products)
        const canvasProduct = angular.element('#productCanvas')
        ServiceChart.getBarChart(canvasProduct)
      })
      .catch((e) => console.log(e))
  }

  app.controller('totalProductsController', ['DataService', 'ServiceChart', totalProductsController])
})()
