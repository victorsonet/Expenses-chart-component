const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
let dataArray = [];
const totalSpending = document.querySelector('.total-amount-number');

fetch('data.json')
.then (response => response.json())
.then ((obj) => {
  let sum = 0
  for(let i = 0; i < obj.length; i++){
    dataArray.push(obj[i].amount);
    sum += obj[i].amount;
    totalSpending.textContent = `$${sum}`;
  }
  myChart.update()
})

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labels,
      datasets: [{
          label: 'USD $',
          data: dataArray,
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