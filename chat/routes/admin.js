var express = require('express');
var router = express.Router();
//var sess = req.session;

var mysql = require('mysql');
var conn = require('../connect');

var chat = require('../lib/mod1');


var passwd = [
    {
    login: 'admin',
    pass:  'pass',
    },
];



/* GET home page. */
router.get('/', function(req, res, next) {
    var sess = req.session;
    // вызываем шаблон "views/admin.mustache" sess.auth
	sql = "SELECT * FROM user";
    conn.query(sql, function(err, rows, fields) {
		if(err) throw err;
		var lusers = [];
		for (var i = 0; i < rows.length; i++) {
			lusers.push(rows[i]);
		}
        var messages = [];//[{'login':'vad'}, {'message_text': 'раз-раз...'}];
        console.log('index route!');
        res.render('admin', { login: sess.login, auth: true, title: 'мини чат', lusers: lusers, messages: messages });
		//res.render('admin_list', {title: 'мини чат', lusers: lusers});
	});
});

router.post('/', function(req, res, next) {
    var sess = req.session;
    sql = "SELECT * FROM user WHERE login=? AND password=?";
    res.render('admin', { auth: true });
});

router.get('/subscribe', function(req, res, next) {
    console.log('subscribe route!');
    chat.subscribe(req, res);
    //res.end('Hello!!');
});


router.post('/publish', function(req, res, next) {
    var message = '';
    req.on('data', function(chunk) {
    //console.log('data:'+chunk);
        message += chunk;
        }).on('end', function() {
            chat.publish(message); // отправка через метод модуля 
        });
});




router.get('/list', function(req, res, next) {
	sql = "SELECT * FROM user";
    conn.query(sql, function(err, rows, fields) {
		if(err) throw err;
		var lusers = [];
		for (var i = 0; i < rows.length; i++) {
			lusers.push(rows[i]);
		}
		res.render('admin_list', {title: 'мини чат', lusers: lusers});
	});
//     var sql = "SELECT * FROM message";
//     conn.query(sql, function(err, rows, fields) {
//         console.log('..start..');
//         for(i=0; i <= rows.length; i++) {
//             console.log(i, rows[i]);
//         }
//         console.log('..finish..');
//         //res.render('admin', { auth: req.session.auth, table: mess});
//     });
});




module.exports = router;
