const express = require('express');
const si = require('systeminformation');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/cpu', async (req, res) => {
  try {
    const cpuData = await si.cpu();
    res.json([{
      brand: cpuData.brand,
      speed: cpuData.speed,
      cores: cpuData.cores,
      physicalCores: cpuData.physicalCores,
      model: cpuData.model,
    }]);
  } catch (error) {
    console.error('Error fetching CPU data:', error);
    res.status(500).json({ error: 'Failed to fetch CPU data' });
  }
});

app.get('/api/ram', async (req, res) => {
  try {
    const ramData = await si.mem();
    res.json([{
      total: (ramData.total / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      free: (ramData.free / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      used: (ramData.used / 1024 / 1024 / 1024).toFixed(2) + ' GB',
    }]);
  } catch (error) {
    console.error('Error fetching RAM data:', error);
    res.status(500).json({ error: 'Failed to fetch RAM data' });
  }
});

app.get('/api/cache', async (req, res) => {
  try {
    const cacheData = await si.cpuCache();
    res.json([{
      l1d: cacheData.l1d + ' KB',
      l1i: cacheData.l1i + ' KB',
      l2: cacheData.l2 + ' KB',
      l3: cacheData.l3 + ' KB',
    }]);
  } catch (error) {
    console.error('Error fetching Cache data:', error);
    res.status(500).json({ error: 'Failed to fetch Cache data' });
  }
});

app.get('/api/disk', async (req, res) => {
  try {
    const diskData = await si.diskLayout();
    const diskInfo = diskData.map(disk => ({
      brand: disk.vendor,
      model: disk.name,
      size: (disk.size / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      type: disk.type,
    }));
    res.json(diskInfo);
  } catch (error) {
    console.error('Error fetching Disk data:', error);
    res.status(500).json({ error: 'Failed to fetch Disk data' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
