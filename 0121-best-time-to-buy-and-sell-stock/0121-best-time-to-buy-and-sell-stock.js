function maxProfit(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            // Update the minimum price when a lower price is found
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            // Update the maximum profit if the potential profit is higher
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}
