var http = require('http');
var fs = require('fs');
var port = 3000;

http.createServer((request, response) => {
    response.write(fs.readFileSync('test.html'))
    response.end();
}).listen(port, function () {
    console.log('Server on http://localhost:3000')
}); 