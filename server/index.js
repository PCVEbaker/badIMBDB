const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const save = require('../database/index.js');
const getMovies = require('../api/helpers.js').getMovies;


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', (req, res) => {
  getMovies((data) => {
    res.json(data);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});