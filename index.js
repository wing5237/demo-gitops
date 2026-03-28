const http = require('http');

const VERSION = "v_1";

http.createServer((req, res) => {
  res.end(`Hello ${VERSION}\n`);
}).listen(3000);
