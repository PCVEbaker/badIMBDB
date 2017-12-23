const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const save = require('../database/index.js').save;
const fetch = require('../database/index.js').fetch;
const remove = require('../database/index.js').remove;
const getMovies = require('../api/helpers.js').getMovies;
const getInfo = require('../api/helpers.js').getInfo;


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  getMovies((data) => {
    res.json(data);
  })
});

app.post('/info', (req, res) => {
  console.log('server');
  console.log(req.body.id);
  getInfo(req.body.id, (info) => {
    res.json(info);
  })
})

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

app.post('/delete', (req, res) => {
  remove(req.body.id, () => {
    res.end()
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});