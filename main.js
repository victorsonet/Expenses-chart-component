let mon;

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
          label: 'USD $',
          data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
          backgroundColor: [
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(186, 34%, 60%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)'
          ],
          borderRadius: 5,
          borderSkipped: false    
      }]
  },
  options: {
      scales: {
          x: {
            grid: {
                display: false,
                borderWidth: 0
            }
          },
          y: {
              grid: {
                display: false,
                borderWidth: 0
              },
              ticks: {
                display: false
            },
              beginAtZero: true
          }
      },
      plugins: {
        legend: {
            display: false
        }
      }
  }
});