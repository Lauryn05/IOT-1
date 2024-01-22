const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Traffic Data',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [65, 59, 80, 81, 56],
        },
    ],
};

// Sample chart options
const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

// Get chart canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create and render the chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});
const devices = [
    { id: 'device1', x: 100, y: 100 },
    { id: 'device2', x: 300, y: 200 },
    // Add more devices as needed
];

const connections = [
    { from: 'device1', to: 'device2' },
    // Add more connections as needed
];

// Function to create the network topology visualization
function createTopology() {
    const svg = d3.select('#topology-container').append('svg')
        .attr('width', 500)
        .attr('height', 300);

    // Create devices
    svg.selectAll('.device')
        .data(devices)
        .enter().append('circle')
        .attr('class', 'device')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', 25);

    // Create connections
    svg.selectAll('.connection')
        .data(connections)
        .enter().append('line')
        .attr('class', 'connection')
        .attr('x1', d => devices.find(device => device.id === d.from).x)
        .attr('y1', d => devices.find(device => device.id === d.from).y)
        .attr('x2', d => devices.find(device => device.id === d.to).x)
        .attr('y2', d => devices.find(device => device.id === d.to).y);
}

// Call the function to create the network topology
createTopology();

setTimeout(function() {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 3000);