const { response } = require('express');

const app = express();

app.get('/', (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name}!`);
});

module.exports = app;
