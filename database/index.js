const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

const movieSchema = mongoose.Schema({
  moviename: String,
  voteAvg: Number,
  imgPath: String,
  id: Number
});

const Movie = mongoose.model('Movie', movieSchema);


// Function will iterate over array of movies, check if the movie already exists
// in the database, and if it doesn't add it to the database
const save = function(movie, cb) {
  Movie.find({"id": movie.id}, (err, docs) => {
    if (err) {
      console.log("Error: ", err);
    }
    if (docs.length === 0) {
      let instance = new Movie({
        "moviename": movie.title,
        "voteAvg": movie.vote_average,
        "imgPath": movie.poster_path,
        "id": movie.id
      });
      instance.save((err, products, numAffected) => {

      });
    }
  })
};


module.exports.save = save;