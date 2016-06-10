var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mustache = require('mustache');
var mustacheExpress = require('mustache-express');
var session = require('express-session');

var port = process.env.PORT || 8080;

var app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
//app.set('view engine', 'mustache'); - хаха, а вот это не работает!!!
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret : "23smkei3hns",
    name : 'sid',
    cookie: {maxAge: 60000 }, 
}));

app.get('/', function(req,res,next) {
    var sess = req.session;
    if (sess.views) {
        sess.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + sess.views + '</p>');
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
        res.end();
    }  else {
        sess.views = 1;
        res.end('welcome to the session semo. refresh! id' + req.session.id);
    }
});


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

//var routes = require('./routes/index');
//app.use('/', routes);
//




app.listen(port);
module.exports = app;
