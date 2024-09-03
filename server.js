const express = require('express');
const si = require('systeminformation');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the root folder
app.use(express.static(__dirname));

// Serve index.html on root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to get CPU information
app.get('/cpu', async (req, res) => {
    try {
        const cpuData = await si.cpu();
        res.json(cpuData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch CPU information' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
