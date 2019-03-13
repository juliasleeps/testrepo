var http = require('http');
var fs = require('fs');
var port = 3000;

http.createServer(function(req, res){
    if(req.url == '/'){
        res.write('Hello World!');
        res.end();    
    } else if(req.url == '/about'){
        res.write('About');
        console.log(req.headers);
        res.end();      
    } else if(req.url == '/contact'){
        fs.readFile('index.html', 'utf8', function(err, data){
            if(err){console.log(err)};
            res.write(data);
            res.end() 
        })       
    } else{
        res.write('404 page is not found')
        res.end() 
    }
}).listen(port, function(){
    console.log('Server on http://localhost:3000')
})