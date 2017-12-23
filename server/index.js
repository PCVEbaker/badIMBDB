const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const save = require('../database/index.js').save;
const saveUser = require('../database/index.js').saveUser;
const checkUser = require('../database/index.js').checkUser;
const fetch = require('../database/index.js').fetch;
const remove = require('../database/index.js').remove;
const getMovies = require('../api/helpers.js').getMovies;
const getInfo = require('../api/helpers.js').getInfo;
const getSimilarMovies = require('../api/helpers.js').getSimilarMovies;


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());


app.get('/movies', (req, res) => {
  getMovies((data) => {
    data = data.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    res.json(data);
  })
});

app.post('/updatedatabase', (req, res) => {
  console.log('getting movies with specific username', req.body);
  fetch(req.body.username, movies => {
    res.json(movies);
  })
});

app.post('/info', (req, res) => {
  getInfo(req.body.id, (info) => {
    res.json(info);
  })
});

app.post('/similar', (req, res) => {
  getSimilarMovies(req.body.id, (info) => {
    info = info.results.sort((a, b) => {
      return a.vote_average - b.vote_average;
    })
    res.json(info);
  })
})


app.post('/database', (req, res) => {
  save(req.body, (products) => {
    res.end();
  }) 
});


app.post('/signup', (req, res) => {
  saveUser(req.body, (boolean) => {
    res.send(boolean)
  })
});

app.post('/login', (req, res) => {
  checkUser(req.body, (data) => {
    // console.log(data);
    res.send(data);
  })
})

app.post('/delete', (req, res) => {
  remove(req.body.id, () => {
    res.end()
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});