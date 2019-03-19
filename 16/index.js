var fs = require('fs');

function writeToFileAsync() {
    fs.readFile('data.txt', 'utf8', function (err, data) {
        console.log(data);
        var newData = data + ' some new data2'
        fs.writeFile('data1.txt', newData, function (err) {
            if (err) console.log(err);
        })
    })
}

writeToFileAsync();