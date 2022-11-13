/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
import {getStockDataArrayFrom} from "../data/StockData";

const alpha = require('alphavantage')({ key: 'RGGF467DVA4HVIUR' });