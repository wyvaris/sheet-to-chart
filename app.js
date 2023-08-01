import Chart from '/node_modules/chart.js/auto/auto.js';
async function getData() {
    const response = await fetch('stats.csv');
    const data = await response.text();
    console.log(data);
};

getData();

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sign Ups', 'General', '2', '3', '4', '5', '6'],
            datasets: [{
                label: '# of Sign-Ups',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
