// var a = 'Hello World';

// console.log(a);

var fs = require('fs');


// var data = fs.readFileSync('data.txt', 'utf-8');
// console.log(data);

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});