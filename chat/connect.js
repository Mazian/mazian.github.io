

var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'rutovat',
   database: 'mydb'
});
connection.connect();

module.exports = connection;

