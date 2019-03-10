var fs = require('fs');

fs.writeFile('data.txt', 'new text!', (err) => {
    if (err) throw err;   
});

fs.appendFile('data.txt', '\nanother text', (err) => {
    if (err) throw err;
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    }); 
});
