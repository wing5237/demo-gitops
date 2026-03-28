const http = require('http');

const VERSION = "v_5";

http.createServer((req, res) => {
  res.end(`Hello ${VERSION}\n`);
}).listen(3000);
