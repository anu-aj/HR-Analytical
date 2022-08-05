//sample chart 
const ctx_sample = document.getElementById('myChart_sample').getContext('2d');

const data_sample = {
    labels: [
      'January',
      'February',
      'March',
      'April'
    ],
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [50, 50, 50, 50],
      fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }]
};

const config_sample = {
    type: 'scatter',
    data: data_sample,
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
      },
      plugins:{
        legend:{
            display:false,
          },
      }
    }
  };
  
const myChart = new Chart(ctx_sample,config_sample);