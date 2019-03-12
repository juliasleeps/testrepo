var fs = require('fs');

var data = fs.readFileSync(__dirname + '/data.txt', 'utf-8');
console.log(data);

// console.log(__dirname);
// console.log(__filename);