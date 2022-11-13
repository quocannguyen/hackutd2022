class StockData {
    open
    high
    low;
    close;
    volume;
    constructor(open, high, low, close, volume){
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
    }

}

function makeArray(){
    let stocks = new Array(StockData);
    for (let i = 0; i < 20; i++) {
        stocks.push();
    }
}

export default StockData;
// export default makeArray;
