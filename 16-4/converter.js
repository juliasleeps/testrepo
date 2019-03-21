//v1

// var Converter = function (baseCurrencyUS) {
//     this.baseCurrencyUS = baseCurrencyUS;
// };

// Converter.prototype.roundTwoDecimal = function (amount) {
//     return Math.round(amount * 1000) / 100;
// }

// Converter.prototype.convertToUa = function (currency) {
//     return this.roundTwoDecimal(currency * this.baseCurrencyUS)
// }

// Converter.prototype.convertToUs = function (currency) {
//     return this.roundTwoDecimal(currency / this.baseCurrencyUS)
// }
// module.exports = Converter;

//v2

// var Converter = function (baseCurrencyUS) {
//     this.baseCurrencyUS = baseCurrencyUS;
//     this.roundTwoDecimal = function (amount) {
//         return Math.round(amount * 1000) / 100;
//     }

//     this.convertToUa = function (currency) {
//         return this.roundTwoDecimal(currency * this.baseCurrencyUS)
//     }

//     this.convertToUs = function (currency) {
//         return this.roundTwoDecimal(currency / this.baseCurrencyUS)
//     }
// };

//module.exports = Converter;

//v3

class Converter {
    constructor(baseCurrencyUS) {
        this.baseCurrencyUS = baseCurrencyUS;
    }

    roundTwoDecimal(amount) {
        return Math.round(amount * 1000) / 100;
    }

    convertToUa(currency) {
        return this.roundTwoDecimal(currency * this.baseCurrencyUS)
    }

    convertToUs(currency) {
        return this.roundTwoDecimal(currency / this.baseCurrencyUS)
    }

}

module.exports = Converter;
