function ServiceChart () {
  this.firstChart = function (element, names, counts) {
    const colors = getRandomColor(names.length)
    return new Chart(element, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# Active and No Active Products',
          data: counts,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
  this.getActiveChart = function (element, names, counts) {
    const colors = getRandomColor(names.length)
    return new Chart(element, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# Active and No Active Products',
          data: counts,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
  this.getBarChart = function (element, names, counts) {
    const colors = getRandomColor(names.length)
    return new Chart(element, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# Total products by Day',
          data: counts,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
  this.getDoughnutChar = function (canvas, data, labels) {
    const colors = getRandomColor(data.length)
    return new Chart(canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: labels,
          backgroundColor: colors,
          borderColor: colors
        }],
        labels: data
      }
    })
  }
}
function getRandomColor (number) {
  const letters = '0123456789ABCDEF'
  let color = '#'
  let arrayColors = []
  for (var i = 0; i < number; i++) {
    for (var j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    arrayColors.push(color)
    color = '#'
  }
  return arrayColors
}
angular
  .module('adminApp')
  .service('ServiceChart', ServiceChart)
