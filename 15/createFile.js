var fs = require('fs');

var file = fs.createWriteStream('demo.txt');

for (var i = 0; i < 100000; i++) {
    file.write('<p>Lorem Ipsumm Dolores</p>')
}
file.end();