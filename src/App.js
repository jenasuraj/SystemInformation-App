import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [hardwareInfo, setHardwareInfo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');

  const fetchHardwareInfo = async (category) => {
    setLoading(true);
    setActiveCategory(category);
    try {
      const response = await axios.get(`http://localhost:5000/api/${category}`);
      setHardwareInfo(response.data);
    } catch (error) {
      console.error(`Error fetching ${category} info:`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>PC Hardware Info</h1>
      <div className="button-container">
        <button onClick={() => fetchHardwareInfo('cpu')}>CPU Info</button>
        <button onClick={() => fetchHardwareInfo('ram')}>RAM Info</button>
        <button onClick={() => fetchHardwareInfo('cache')}>Cache Info</button>
        <button onClick={() => fetchHardwareInfo('disk')}>Hard Disk Info</button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {hardwareInfo && !loading && (
        <div className="hardware-info">
          <h2>{activeCategory.toUpperCase()} Details:</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(hardwareInfo[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hardwareInfo.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
