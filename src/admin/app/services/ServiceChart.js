function ServiceChart () {
  this.getBarChart = function (element, dates, counts) {
    const barChart = new Chart(element, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: '# Uploading Articles by Day',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                'millisecond': 'MMM DD',
                'second': 'MMM DD',
                'minute': 'MMM DD',
                'hour': 'MMM DD',
                'day': 'MMM DD',
                'week': 'MMM DD',
                'month': 'MMM DD',
                'quarter': 'MMM DD',
                'year': 'MMM DD'
              }
            }
          }]
        }
      }
    })
    return barChart
  }
  this.getDoughnutChar = function (canvas, data, labels) {
    var myPieChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: data
        }],
        labels: labels
      }
    })
  }
}

angular
  .module('adminApp')
  .service('ServiceChart', ServiceChart)
