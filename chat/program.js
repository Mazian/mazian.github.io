// 1 lesson
//console.log('HELLO WORLD');

// 2 lesson
// var _get = process.argv;
// var sum = 0;

// for(i=2; i < _get.length; i++) {
//     sum = sum + Number(_get[i]);
// }
// console.log(sum);

// 3 lesson
var fs = require('fs');
var lang = process.argv[2]; // по командной строке

        fs.readFile(pathname, 'utf8', function (err, data) {
            if (err) {
                console.log('Could not find or open file ' + pathname +' for reading\n ');
            } else {
                response.writeHead (200, {'Content-Type': mimeType + '; charset=UTF-8'});
                response.end(data);
            }
        })



