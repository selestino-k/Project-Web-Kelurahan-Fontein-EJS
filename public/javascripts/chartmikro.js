const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Kios', 'Tambal Ban', 'Kuliner', 'Print dan Fotokopi'],
        datasets: [{
            label: '# of Votes',
            data: [10, 5, 4, 3],
           
            backgroundColor: [
                'rgba(2, 99, 132, 1)',
                'rgba(220, 0, 0, 1)',
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