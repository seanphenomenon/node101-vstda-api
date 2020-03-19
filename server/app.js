const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({ extended: false }));

// parses application json
app.use(bodyParser.json());

const router = express.Router();
app.use('/', router)

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

// route handlers for requests to  all paths with /

router
  .route('/')
  .all(function (req, res, next) {
    res.json({ status: "ok" });
  })

router
  .route('/api/TodoItems')
  .get(function (req, res, next) {
    res.json(initialData);
  })
  .post(function (req, res, next) {
    res.status(201).json(req.body);
  })
  .put(function (req, res, next) {
    res.status(201).json(req.body)
  });

router
  .route('/api/TodoItems/:id')
  .get(function (req, res, next) {
    res.status(200).send(initialData[req.params.id]);
  })
  .delete(function (req, res, next) {
    let item = initialData[req.params.id]
    initialData.splice(req.params.id, 1);
    res.status(200).json(item);
  });



module.exports = app;

