(function () {
  'use strict'
  const app = angular.module('adminApp')

  function totalProductsController () {
    var ctxProducts = document.getElementById('products')
    var productsChart = new Chart(ctxProducts, {
      type: 'bar',
      data: {
        labels: ['20/08/2017', '21/08/2017', '22/08/2017', '23/08/2017', '24/08/2017'],
        datasets: [{
          label: '# Nº subidas nuevas',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
  app.controller('totalProductsController', totalProductsController)
})()
