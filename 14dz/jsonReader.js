// var fs = require('fs');

// fs.readFile('currency.json', 'utf8', function(err, data){
//     const parsedData = JSON.parse(data);
//     console.log(parsedData);
// });

const request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR1r_e2qbut-wyX9PIpa-D-Lw-vOvsCYQvW6Ls7lZhJGcVP4lYgEufOfJfs', { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    console.log(data);
});