const express = require('express');
const path = require('path');
const save = require('../database/index.js');
const getMovies = require('../api/helpers.js');


const app = express();



app.listen(3000, function() {
  console.log('listening on port 3000!');
});