class StockData {
    constructor(open, high, low, close, volume, timeStamp){
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
        this.timeStamp = timeStamp
    }
}

export function getStockDataArrayFrom(dataset){
    let stockDataArray = new Array(StockData);
    for (const timeStamp in dataset) {
        let open = dataset[timeStamp]["1. open"]
        let high = dataset[timeStamp]["2. high"]
        let low = dataset[timeStamp]["3. low"]
        let close = dataset[timeStamp]["4. close"]
        let volume = dataset[timeStamp]["5. volume"]
        let stockData = new StockData(open, high, low, close, volume, timeStamp)
        stockDataArray.push(stockData)
    }
    return stockDataArray
}

export default StockData;
// export default makeArray;
