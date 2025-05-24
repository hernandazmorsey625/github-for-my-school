const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { name, age } = req.body;
  console.log(`Received request to add: ${name} and ${age}`);
  
  // Add the data to an array of users
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 }
  ];

  users.push({ id: users.length + 1, name: 'Charlie', age: 40 });

  res.send(`Data added successfully to the database.`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
