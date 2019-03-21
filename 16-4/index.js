var Converter = require('./converter');
var baseCurrencyUS = 27;

var conv = new Converter(baseCurrencyUS);

console.log(conv)
console.log(conv.convertToUa(1000))
console.log(conv.convertToUs(1000))