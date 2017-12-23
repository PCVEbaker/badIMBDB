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
  console.log(movie);
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
        cb(products)
      });
    } else {
      cb();
    }
  })
};

const fetch = function(cb) {
  Movie.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      cb(docs);
    }
  })
};

const remove = function(id, cb) {
  Movie.remove({"id": id}, err => {
    if (err) {
      console.log(err)
      cb()
    } else {
      cb()
    }
  })
}


module.exports.save = save;
module.exports.fetch = fetch;
module.exports.remove = remove;