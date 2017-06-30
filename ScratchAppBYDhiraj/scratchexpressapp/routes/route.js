var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index');
});

router.get('/GetValue/:FName', function(req, res){
  console.log(req.params.FName);
  res.send('Welcome '+req.params.FName);
});

module.exports = router;
