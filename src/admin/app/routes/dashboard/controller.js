/* global angular */
(function () {
  'use strict'

  function dashboardController ($routeParams) {
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
    const ctxUsers = document.getElementById('users')
    var usersLine = new Chart(ctxUsers, {
      type: 'line',
      data: {
        labels: ['20/08/2017', '21/08/2017', '22/08/2017', '23/08/2017', '24/08/2017'],
        datasets: [{
          label: '# Nº usuarios',
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
            stacked: true
          }]
        }
      }
    })
    const ctxCategories = document.getElementById('categories')
    var myPieChart = new Chart(ctxCategories, {
      type: 'pie',
      data: {
        labels: ['motor', 'electronica', 'ropa', 'juegos', 'casa'],
        datasets: [{
          label: '# Nº productos por categorías',
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
        segmentShowStroke: true,
        segmentStrokeColor: '#fff',
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: 'easeOutBounce',
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        animateScale: true
      }
    })
  }

  angular
    .module('root')
    .controller('dashboardController', dashboardController)
})()
