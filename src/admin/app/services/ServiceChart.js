
function ServiceChart () {
  this.getBarChart = function (element, dateRange, dataRange) {
    dateRange = dateRange || ['26/08/2017', '27/08/2017', '28/08/2017', '29/08/2017']
    dataRange = dataRange || [12, 19, 3, 5]
    const barChart = new Chart(element, {
      type: 'bar',
      data: {
        labels: dateRange,
        datasets: [{
          label: '# Nº subidas nuevas',
          data: dataRange,
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
}

angular
      .module('adminApp')
      .service('ServiceChart', ServiceChart)
