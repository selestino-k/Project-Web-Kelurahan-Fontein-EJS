const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Usaha  Mikro', 'Usaha Kecil', 'Usaha Menengah',],
        datasets: [{
            label: '# of Votes',
            data: [95, 52, 23,],
           
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(0,0,0)'
                }
            }
        }
    }
    
});