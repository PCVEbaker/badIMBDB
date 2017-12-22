const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const save = require('../database/index.js').save;
const fetch = require('../database/index.js').fetch;
const getMovies = require('../api/helpers.js').getMovies;


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  getMovies((data) => {
    res.json(data);
  })
});

app.get('/database', (req, res) => {
  fetch(movies => {
    res.json(movies);
  })
});

app.post('/database', (req, res) => {
  save(req.body, (products) => {
    res.end();
  }) 
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});