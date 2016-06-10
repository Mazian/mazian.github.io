var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var mustache = require('mustache');
var mustacheExpress = require('mustache-express');
var session = require('express-session');

//var config = require('config');
//var dbConfig = config.get('Customer.dbConfig');
//db.connect(dbConfig,...);
//if (config.has('optionalFeature.detail')){
//	var detail = config.get('optionalFeature.detail');
//}



var port = process.env.PORT || 8080;
var app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// включение сервиса сессий
app.use(session({
    secret : "23smkei3hns",
    name : 'sid',
    cookie: {maxAge: 60000 }, 
}));

// для принимания POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




var conn = require('./connect');
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'rutovat',
//    database: 'mydb'
// });
// connection.connect();



//var routes = require('./routes/index');
//app.use('/', routes);
var admin = require('./routes/admin');
app.use('/', admin);



app.listen(port);
module.exports = app;

//connection.end();
