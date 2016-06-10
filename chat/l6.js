var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mustache = require('mustache');
var mustacheExpress = require('mustache-express');

var port = process.env.PORT || 8080;

var app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
//app.set('view engine', 'mustache'); - хаха, а вот это не работает!!!

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes/index');
app.use('/', routes);





app.listen(port);
module.exports = app;
