/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
import {useDispatch} from "react-redux";
import {add} from "../features/previousdata/previousDataSlice";
import {getStockDataArrayFrom} from "../data/StockData";

const alpha = require('alphavantage')({ key: 'RGGF467DVA4HVIUR' });

export function getIntradayStockDataBySymbol(symbol) {
    return alpha.data.intraday(symbol).then(result => {
        let key = Object.keys(result)[1]
        return getStockDataArrayFrom(result[key])
    })
}