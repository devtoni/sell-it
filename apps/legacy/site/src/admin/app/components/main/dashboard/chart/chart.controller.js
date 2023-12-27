(function () {
  'use strict'
  function ChartCtrl (ApiService, ServiceChart, $scope) {
    let myChart
    const ctx = angular.element('#canvas')
    myChart = ServiceChart.firstChart(ctx, ['Products'], [''])
    $scope.$on('optionsSelection', (event, options) => {
      const { values } = options
      if (options.getDataFrom === 'products') {
        ApiService.getProducts()
        .then((products) => {
          const results = products.data
          if (values === 'active') {
            myChart.destroy()
            const activeProducts = results.isActive.true
            const total = results.totalProductsQ
            const noActive = total - activeProducts
            myChart = ServiceChart.getActiveChart(ctx, ['Active Products', 'No Active Products'], [activeProducts, noActive])
          } else {
            myChart.destroy()
            const days = results.totalProductsByDay.map(day => day._id)
            const totalPerDay = results.totalProductsByDay.map(day => day.total)
            const formatedDay = days.map((objectDay) => +new Date(Object.values(objectDay).join('/')))
            myChart = ServiceChart.getBarChart(ctx, formatedDay, totalPerDay)
          }
        })
      } else if (options.getDataFrom === 'users') {
        ApiService.getTotalUsers()
        .then(usersData => {
          const results = usersData.data
          switch (values) {
            case 'gender':
              myChart.destroy()
              myChart = ServiceChart.getDoughnutChar(ctx, Object.keys(results.usersByGender), Object.values(results.usersByGender))
              break
            case 'location':
              myChart.destroy()
              myChart = ServiceChart.getDoughnutChar(ctx, Object.keys(results.usersByLocation), Object.values(results.usersByLocation))
              break
            case 'age':
              myChart.destroy()
              myChart = ServiceChart.getDoughnutChar(ctx, Object.keys(results.usersByAge), Object.values(results.usersByAge))
              break
          }
        })
      } else {
        ApiService.getCategories()
        .then(categories => {
          myChart.destroy()
          myChart = ServiceChart.getDoughnutChar(ctx, Object.keys(categories.data), Object.values(categories.data))
        })
      }
    })
  }
  angular
        .module('adminApp')
        .controller('ChartCtrl', ['ApiService', 'ServiceChart', '$scope', ChartCtrl])
})()
