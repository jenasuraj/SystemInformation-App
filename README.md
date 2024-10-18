<h1>System Information App</h1>

<p>A lightweight and simple application built with react and node js that displays essential system information such as CPU usage, memory stats, OS details, and more. This app provides real-time data, helping users monitor their system's performance.</p>

<h2>Features</h2>
<ul>
  <li>Displays system details like CPU, memory, OS type, and uptime.</li>
  <li>Lightweight and fast with minimal dependencies.</li>
  <li>Real-time data updates on system usage.</li>
  <li>Easy to run locally with Node.js.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Node.js</strong> – Backend runtime environment</li>
  <li><strong>React js</strong> – Application logic</li>
</ul>

<h2>Prerequisites</h2>
<p>Make sure you have the following installed on your machine:</p>
<ul>
  <li><a href="https://nodejs.org">Node.js</a> (v12+)</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/your-username/system-info-app.git
cd system-info-app</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2>Usage</h2>
<ol>
  <li>Run the application:
    <pre><code>node index.js</code></pre>
  </li>
  <li>Open your terminal to see the system information printed in real-time.</li>
</ol>

<h2>Example Output</h2>
<pre><code>OS Type: Linux
CPU Architecture: x64
Total Memory: 8.4 GB
Free Memory: 2.3 GB
Uptime: 3600 seconds</code></pre>

<h2>Project Structure</h2>
<pre><code>system-info-app/
│
├── index.js           # Main entry point of the app
├── package.json       # Node.js dependencies and scripts
└── README.md          # Documentation</code></pre>

<h2>Code Overview</h2>
<p>Here’s a simple example of the <code>index.js</code>:</p>
<pre><code>const os = require('os');

console.log('OS Type:', os.type());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB');
console.log('Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB');
console.log('Uptime:', os.uptime(), 'seconds');</code></pre>

<h2>Contributing</h2>
<p>Contributions are welcome! Feel free to open an issue or submit a pull request for improvements.</p>


<h2>Contact</h2>
<p>Created by <a href="https://github.com/jenasuraj">Suraj jena</a></p>

</body>
</html>
