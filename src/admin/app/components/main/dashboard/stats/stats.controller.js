(function () {
  'use strict'
  const app = angular.module('adminApp')
  function StatsCtrl (ApiService, ServiceChart) {
    const self = this
    const canvas = angular.element('#canvas')
    self.optionSelection = function () {
      console.log(self.optionSelected)
      switch (self.optionSelected) {
        case 'menWomen':
          ApiService.getTotalUsers()
          .then(users => {
            const data = [users.data[0].female, users.data[0].male]
            const gender = ['female', 'male']
            ServiceChart.getDoughnutChar(canvas, data, gender)
          })
          break
        case 'productsByDay':
          ApiService.getProducts()
          .then(products => {
            console.log(products)
          })
          break
        case 'categories':
          ApiService.getCategories()
          .then(categories => {
            console.log(categories)
          //  ServiceChart.getDoughnutChar(canvas, counts, catNames)
          })
          break
        case 'active':
          ApiService.getProducts()
          .then(products => console.log(products))
      }
    }
  }

  app.controller('StatsCtrl', ['ApiService', 'ServiceChart', StatsCtrl])
})()
