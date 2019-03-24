class Converter {
    constructor(baseCurrencyUS) {
        this.baseCurrencyUS = baseCurrencyUS
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
