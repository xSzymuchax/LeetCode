/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0;
    for (let j=0; j<prices.length-1;j++){
        if (prices[j+1] > prices[j]) {
            profit += prices[j+1]-prices[j];
        } 
    }
    
    return profit;
};
