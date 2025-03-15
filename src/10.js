function getRandomNodeJsCode() {
  const http = require('http');
  const url = 'https://www.example.com';
  
  const request = http.get(url, (response) => {
    console.log(`statusCode: ${response.statusCode}`);
    
    response.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
  });
}
