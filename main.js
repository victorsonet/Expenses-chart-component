const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
let dataArray = [];
const totalSpending = document.querySelector('.total-amount-number');
let monColor = 'hsl(10, 79%, 65%)';
let tueColor = 'hsl(10, 79%, 65%)';
let wedColor = 'hsl(10, 79%, 65%)';
let thuColor = 'hsl(10, 79%, 65%)';
let friColor = 'hsl(10, 79%, 65%)';
let satColor = 'hsl(10, 79%, 65%)';
let sunColor = 'hsl(10, 79%, 65%)';
let blue = 'hsl(186, 34%, 60%)';

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

const dates = new Date();
const day = labels[dates.getDay()-1];

if (day == 'Mon') {
  monColor = blue;
} else if (day == 'Tue') {
  tueColor = blue;
} else if (day === 'Wed') {
  wedColor = blue;
} else if (day == 'Thu') {
  thuColor = blue;
} else if (day == 'Fri') {
  friColor = blue;
} else if (day == 'Sat') {
  satColor = blue;
} else if (day == 'Sun') {
  sunColor = blue;
}

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labels,
      datasets: [{
          label: 'USD $',
          data: dataArray,
          backgroundColor: [
              monColor,
              tueColor,
              wedColor,
              thuColor,
              friColor,
              satColor,
              sunColor
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

