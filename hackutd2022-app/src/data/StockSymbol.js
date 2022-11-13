class StockSymbol {
    constructor(symbol, name, type, region, marketOpen, marketClose, timezone, currency, matchScore) {
        this.symbol = symbol
        this.name = name
        this.type = type
        this.region = region
        this.marketOpen = marketOpen
        this.marketClose = marketClose
        this.timezone = timezone
        this.currency = currency
        this.matchScore = matchScore
    }
}

export function getStockSymbolFrom(match) {
    let symbol = match["1. symbol"]
    let name = match["2. name"]
    let type = match["3. type"]
    let region = match["4. region"]
    let marketOpen = match["5. marketOpen"]
    let marketClose = match["6. marketClose"]
    let timezone = match["7. timezone"]
    let currency = match["8. currency"]
    let matchScore = match["9. matchScore"]
    return new StockSymbol(symbol, name, type, region, marketOpen, marketClose, timezone, currency, matchScore)
}