
/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require('alphavantage')({ key: 'RGGF467DVA4HVIUR' });

export default function test() {
// Simple examples
    alpha.data.intraday(`msft`).then((data) => {
        console.log(data);
    });

    // alpha.data.intraday(symbol, outputsize, datatype, interval);
    // alpha.data.daily(symbol, outputsize, datatype, interval);
    // alpha.data.daily_adjusted(symbol, outputsize, datatype, interval);
    // alpha.data.weekly(symbol, outputsize, datatype, interval);
    // alpha.data.weekly_adjusted(symbol, outputsize, datatype, interval);
    // alpha.data.monthly(symbol, outputsize, datatype, interval);
    // alpha.data.monthly_adjusted(symbol, outputsize, datatype, interval);
    // alpha.data.quote(symbol, outputsize, datatype, interval);
    // alpha.data.search(keywords);
}