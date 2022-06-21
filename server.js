const express = require('express');
const bodyParser = require('body-parser')
const calculatorController = require('./controllers/calculator-controller')
const userController = require('./controllers/user-controller')
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get('/add', calculatorController.add)
app.get('/divide', calculatorController.divide)

app.get('/users/top/:top', userController.getTopUsers)
app.post('/users', userController.addUser)

app.listen(port, function() {
  console.log(`Api listening on port ${port}!`)
});