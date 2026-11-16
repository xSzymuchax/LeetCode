/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i=0;
    let j=1;
    
    let maxProfit=0;
    while (j<prices.length){
        if (prices[j] < prices[i]){
            i=j;
        }
        else {
            let profit = prices[j] - prices[i];
            if (profit>maxProfit) maxProfit=profit;
        }
        j++;
    }
    
    return maxProfit;
};
