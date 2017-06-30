var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes/route.js');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(2000, function(){
console.log('server is started on port 2000...');
});
