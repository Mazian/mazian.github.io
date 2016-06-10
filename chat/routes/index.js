var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conn = require('../connect');


var arr = [
    {
    name: 'Piter',
    data: 'bla-bla-bla',
    },
    {
    name: 'Vasiy',
    data: 'bla2-bla2',
    }
];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/chat', function(req, res, next) {
//     var sql = "SELECT * FROM message";
//     conn.query(sql, function(err, rows, fields) {
//         console.log('..start..');
//         for(i=0; i <= rows.length; i++) {
//             console.log(i, rows[i]);
//         }
//         console.log('..finish..');
//         //res.render('admin', { auth: req.session.auth, table: mess});
//     });
// });




router.post('/ajaxservice/get', function(req, res, next) {
//  res.send('alert-sol\n<br>');
  res.send(
      [
          {name: 'Пусик', data: 'Всем чмоки в этом чате!!!'},
          {name: 'Preacher', data: 'Изыди, сатана!'},
      ]);
});


module.exports = router;
