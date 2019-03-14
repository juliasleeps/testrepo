var fs = require('fs');

fs.readFile('currency.json', 'utf8', function(err, data){
    const parsedData = JSON.parse(data);
    console.log(parsedData);
});