const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// add your code here


var initialData = [
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];


app.get('/', function (req, res) {
  res.status(200).send({ status: 'ok' });
});

app.get('/api/TodoItems', function (req, res) {
  res.status(200).send(initialData);
});

app.get('/api/TodoItems/:id', function (req, res) {
  res.status(200).send(initialData[req.params.id]);
});

app.post('/api/TodoItems/', function(req, res) {

 var newItem = {
    "todoItemId": 101,
    "name": "Sean test",
    "priority": 5,
    "completed": false,
  }



initialData.push(newItem)

console.log("hello")
res.status(201).send(newItem)

});







module.exports = app;

