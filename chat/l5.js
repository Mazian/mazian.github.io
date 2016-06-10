var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mustache = require('mustache');

var port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/user/:key/:value', function(req, res) {
  res.send('Получен ключ [' + req.params['key'] + '] со значением [' + req.params['value'] + ']');
  //res.send('killla a');
});

app.get('/reg' , function(req, res) {
  res.send('<h3>Enter new user:</h3><form method="post" action="/user/add">Login: <input name="login"><br />Password: <input name="pass" type="password"><br />E-mail: <input name="email"><input type="submit"></form>');
});

app.post('/user/add' , function(req, res) {
  console.log(req);
  var template = "Уважаемый {{login}}! Спасибо за вашу регистристраю! Для подтверждения регистрации пройдите по ссылке, которая отправлена Вам в письме на адрес {{email}}";
//  var html = mustache.to_html(template, view);
  var html = mustache.render(template, req.body);
  //var html = 'INSERT INTO users (login, pass, email) SET ("' + req.body.login + '", "' + req.body.pass + '", "' + req.body.email + '");';
  res.send(html);
});






app.listen(port);
module.exports = app;
