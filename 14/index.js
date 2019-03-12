// var http = require('http');
// var fs = require('fs');
// var port = 3000;

// http.createServer((request, response) => {
//     response.write(fs.readFileSync('test.html'))
//     response.end();
// }).listen(port, function () {
//     console.log('Server on http://localhost:3000')
// }); 

var http = require('http');
var port = 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!')
        res.end();
    } else if (req.url === '/contact') {
        res.write('Hello from Ukraine')
        res.end();
    } else {
        res.write('Other')
        res.end();
    }

}).listen(port, function () {
    console.log('Server on http://localhost:3000')
})