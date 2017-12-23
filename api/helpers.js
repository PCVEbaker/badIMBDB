const axios = require('axios');

const getMovies = function(cb) {
  axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=654f5d8f68846599da7d80021ad2ba27')
    .then((response) => {
      cb(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
};

const getInfo = function(id, cb) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=654f5d8f68846599da7d80021ad2ba27`)
    .then(res => {
      cb(res.data);
    })
    .catch(err => {
      console.log(err);
    })
};

const getSimilarMovies = function(id, cb) {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=654f5d8f68846599da7d80021ad2ba27`)
    .then(res => {
      cb(res.data);
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports.getInfo = getInfo;
module.exports.getMovies = getMovies;
module.exports.getSimilarMovies = getSimilarMovies;