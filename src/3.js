const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the URL and query parameters
  const urlParams = new URL(req.url, `https://${req.headers.host}`).searchParams;
  const name = urlParams.get('name');
  const age = parseInt(urlParams.get('age'));

  // Check if the user has entered a name and an age
  if (!name || !age) {
    res.statusCode = 400;
    res.end(`Please enter both a name and an age`);
    return;
  }

  // Send a response back to the client
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${name}! You are ${age} years old.`);
});

// Listen on port 3000
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
