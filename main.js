const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello from Node.js on Lightsail');
});
server.listen(80, () => console.log('Server running on port 80'));