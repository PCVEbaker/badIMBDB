const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

const movieSchema = mongoose.Schema({
  moviename: String,
  voteAvg: Number,
  imgPath: String,
  voteCount: Number,
  id: Number,
  username: String
});

const userSchema = mongoose.Schema({
  username: String,
  password: String
});


const Movie = mongoose.model('Movie', movieSchema);
const User = mongoose.model('User', userSchema);

// Function will iterate over array of movies, check if the movie already exists
// in the database, and if it doesn't add it to the database
const save = function(movie, cb) {
  Movie.find({"id": movie.id, "username": movie.username}, (err, docs) => {
    if (err) {
      console.log("Error: ", err);
    }
    
    if (docs.length === 0) {
      let instance = new Movie({
        "moviename": movie.title,
        "voteAvg": movie.vote_average,
        "voteCount": movie.vote_count,
        "imgPath": movie.poster_path,
        "id": movie.id,
        "username": movie.username
      });
      instance.save((err, products, numAffected) => {
        cb(products)
      });
    } else {
      cb();
    }
  })
};

const saveUser = function(user, cb) {
  User.find({"username": user.username}, (err, docs) => {
    if (err) {
      console.log("Error: ", err);
    }

    if (docs.length === 0) {
      let instance = new User({
        "username": user.username,
        "password": user.password
      });
      instance.save((err, products, numAffect) => {
        cb(true)
      })
    } else {
      cb(false)
    }
  })
}

const checkUser = function(user, cb) {
  User.find({"username": user.username, "password": user.password}, (err, docs) => {
    if (err) {
      console.log('Error: ', err);
    }

    if (docs.length === 0) {
      cb(false);
    } else {
      console.log(docs)
      cb([true, docs[0]['username']]);
    }
  })
}

const fetch = function(username, cb) {
  Movie.find({"username": username}, (err, docs) => {
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
module.exports.saveUser = saveUser;
module.exports.checkUser = checkUser;
module.exports.fetch = fetch;
module.exports.remove = remove;