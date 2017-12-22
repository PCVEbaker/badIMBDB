const axios = require('axios');

const getPopularMovies = function(cb) {
  axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=654f5d8f68846599da7d80021ad2ba27')
    .then((response) => {
      cb(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
};

module.exports.getPopularMovies = getPopularMoviess