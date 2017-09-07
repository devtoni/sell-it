function ServiceChart () {
  this.getActiveChart = function (element, names, counts) {
    console.log(counts)
    const barChart = new Chart(element, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# Active and No Active Products',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
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
    return barChart
  }
  this.getBarChart = function (element, names, counts) {
    console.log(counts)
    const barChart = new Chart(element, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# Total products by Day',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
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
    return barChart
  }
  this.getDoughnutChar = function (canvas, data, labels) {
    console.log(data)
    console.log(labels)
    var myPieChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: labels
        }],
        labels: data
      }
    })
  }
}

angular
  .module('adminApp')
  .service('ServiceChart', ServiceChart)
