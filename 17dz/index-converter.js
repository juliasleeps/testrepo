var Converter = require('./converter');
var request = require('request');

getCurrencyUS(function(data){
    createObj(data)
})

function getCurrencyUS(callback){
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', { json: true }, function (error, res, body) {
        var baseCurrencyUS = null;
        if (!error && res.statusCode == 200) {
        baseCurrencyUS = parseFloat(body[0].sale) 
        } else {
            baseCurrencyUS = 27;
        }
        callback(baseCurrencyUS) 
    })
}

function createObj(data){
    var conv = new Converter(data);
    console.log(conv.convertToUa(1000))
    console.log(conv.convertToUs(1000))
}