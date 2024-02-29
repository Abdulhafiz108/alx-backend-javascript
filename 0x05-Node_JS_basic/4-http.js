const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

const PORT = 1245;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log('Server running at http://${HOST}:${PORT}/');
});

module.exports = app;
