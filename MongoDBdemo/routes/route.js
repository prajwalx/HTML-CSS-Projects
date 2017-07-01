var express = require('express');
var router = express.Router();
var Movie = require('../model/movies.js');

router.get('/',function (req,res) {
  res.render('index');

});

router.get('/ShowMovies',function (req,res) {
  Movie.find({}, function (err,data) {
    if (err) {
      throw err;
      console.log('No Data in DB');
    }
    else {
      res.json(data);
    }
  });

});
module.exports = router;
