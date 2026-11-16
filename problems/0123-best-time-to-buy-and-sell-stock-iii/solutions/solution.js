/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy1 = -Infinity;
    let profit1 = 0;
    let buy2 = -Infinity;
    let profit2 = 0;

    for (const p of prices) {
        buy1 = Math.max(buy1, -p);
        profit1 = Math.max(profit1, buy1 + p);
        buy2 = Math.max(buy2, profit1 - p);
        profit2 = Math.max(profit2, buy2 + p);
    }

    return profit2;
};
