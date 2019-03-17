var http = require('http');
var fs = require('fs');

var port = 3000;
var maxSize = 5;

var calcSize = function(file){
    fs.statSync(file).size / 1000000.0;
}

http.createServer(function(req, res){
    if(req.url == '/'){
        res.write('HOME PAGE');
        res.write('\n to automatically restart your server you can use https://nodemon.io/')
        res.end();    
    } else if(req.url == '/stream'){
        var fileSize = calcSize('big_data.txt');
        if (fileSize < maxSize){
            fs.readFile('big_data.txt', 'utf8', function(err, data){ 
                if(err){console.log(err)};
                res.write(data);
                res.end();
            })
        } else {
            var stream = fs.createReadStream('big_data.txt');
            stream.pipe(res); 
        }
    } else if(req.url == '/file'){
        fs.readFile('light_data.txt', 'utf8', function(err, data){ 
            if(err){console.log(err)};
            res.write(data);
            res.end();
        })       
    } else{
        res.write('404 page is not found')
        res.end() 
    } 
}).listen(port, function(){
    console.log('Server is on http://localhost:3000');
})