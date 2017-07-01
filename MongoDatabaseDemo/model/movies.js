var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({
  Title: String,
  Language: String,
  Genre: String,
  Director: String,
  Actors: String,
  Year: Number,
  Runtime: String,
  Poster: String,
  Status: Boolean
});

module.exports = mongoose.model('movies', movieSchema);
