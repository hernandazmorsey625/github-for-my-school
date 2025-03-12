const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to my website!</h1>');
  } else if (pathname === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>About Me</h1>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Page Not Found</h1>');
  }
}).listen(3000);
