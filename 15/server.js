var http = require('http');
var fs = require('fs');

var port = 3000;

// http.createServer(function (req, res) {
//     fs.readFile('demo.txt', 'utf8', function (err, data) {
//         res.write(data);
//         res.end();
//     })
// }).listen(port, function () {
//     console.log('Server on http://localhost:3000')
// })

http.createServer(function (req, res) {
    var stream = fs.createReadStream('demo.txt');
    stream.pipe(res);
}).listen(port, function () {
    console.log('Server on http://localhost:3000')
})
