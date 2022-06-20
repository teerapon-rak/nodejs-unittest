const express = require('express');
const calculatorController = require('./controllers/calculator-controller')
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get('/add', calculatorController.add)
app.get('/devide', calculatorController.devide)

app.listen(port, function() {
  console.log(`Api listening on port ${port}!`)
});