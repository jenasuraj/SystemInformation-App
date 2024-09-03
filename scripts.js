// scripts.js
document.getElementById('cpuButton').addEventListener('click', () => {
    fetch('/cpu')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cpuInfo').innerText = `CPU: ${data.manufacturer} ${data.brand} - ${data.speed} GHz`;
        })
        .catch(error => {
            document.getElementById('cpuInfo').innerText = 'Error fetching CPU info';
            console.error('Error:', error);
        });
});
