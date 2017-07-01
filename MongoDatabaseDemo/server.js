var express = require('express');
var app = express();
var routes = require('./routes/route.js');
var path = require('path');
var mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

mongoose.connect('mongodb://localhost:27017/merafilm-dev');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connected');
});

app.use('/', routes);

app.listen(8000, function(){
  console.log('Server is running on port 8000');
});
