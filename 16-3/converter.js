var baseCurrencyUS = 27;

function roundTwoDecimal(amount) {
    return Math.round(amount * 1000) / 100;
}

module.exports.converterToUs = function (currency) {
    return roundTwoDecimal(currency / baseCurrencyUS)
}

module.exports.converterToUa = function (currency) {
    return roundTwoDecimal(currency * baseCurrencyUS)
}