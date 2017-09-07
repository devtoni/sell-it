(function () {
  'use strict'
  const app = angular.module('adminApp')
  function ChartCtrl (ApiService, ServiceChart, $scope) {
    $scope.$on('optionsSelection', (event, options) => {
      const { values } = options
      console.log(values)
      const ctx = angular.element('#canvas')
      if (options.getDataFrom === 'products') {
        ApiService.getProducts()
        .then((products) => {
          const results = products.data
          if (values[0].value === 'active') {
            const activeProducts = results.isActive.true
            const total = results.totalProductsQ
            const noActive = total - activeProducts
            ServiceChart.getActiveChart(ctx, ['Active Products', 'No Active Products'], [activeProducts, noActive])
          } else {
            const days = results.totalProductsByDay.map(day => day._id)
            const totalPerDay = results.totalProductsByDay.map(day => day.total)
            const formatedDay = days.map((objectDay) => +new Date(Object.values(objectDay).join('/')))
            ServiceChart.getBarChart(ctx, formatedDay, totalPerDay)
          }
        })
      } else if (options.getDataFrom === 'users') {
        ApiService.getTotalUsers()
        .then(usersData => {
          const results = usersData.data
          const option = values[0].value
          switch (option) {
            case 'gender':
              ServiceChart.getDoughnutChar(ctx, Object.keys(results.usersByGender), Object.values(results.usersByGender))
              break
            case 'location':
              ServiceChart.getDoughnutChar(ctx, Object.keys(results.usersByLocation), Object.values(results.usersByLocation))
              break
            case 'age':
              ServiceChart.getDoughnutChar(ctx, Object.keys(results.usersByAge), Object.values(results.usersByAge))
              break
          }
        })
      } else {
        ApiService.getCategories()
        .then(categories => {
          ServiceChart.getDoughnutChar(ctx, Object.keys(categories.data), Object.values(categories.data))
        })
      }
    })
  }

  app.controller('ChartCtrl', ['ApiService', 'ServiceChart', '$scope', ChartCtrl])
})()
