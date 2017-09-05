(function () {
  'use strict'
  const app = angular.module('adminApp')
  function StatsCtrl (ApiService, ServiceChart) {
    const self = this
    const canvas = angular.element('#canvas')
    self.optionSelection = function () {
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
            const arrayOfProducts = products.data.productsByDay
            const arrayOfDates = arrayOfProducts.map((product) => Object.values(product._id))
            const formatedDates = arrayOfDates.map((date) => +new Date(date.join('/')))
            const countByDate = arrayOfProducts.map((product) => product.total)
            ServiceChart.getBarChart(canvas, formatedDates, countByDate)
          })
          break
        case 'categories':
          ApiService.getCategories()
          .then(categories => {
            const categoriesArray = categories.data
            const categoriesFormated = categoriesArray.reduce((acc, category) => {
              acc[category.title] = category.products.length
              return acc
            }, {})
            const catNames = Object.keys(categoriesFormated)
            const counts = Object.values(categoriesFormated)
            ServiceChart.getDoughnutChar(canvas, counts, catNames)
          })
      }
    }
  }

  app.controller('StatsCtrl', ['ApiService', 'ServiceChart', StatsCtrl])
})()
