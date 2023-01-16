/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let answer = 0
    for(i=1 ; i<prices.length ; i++) {
        if(prices[i] > prices[i-1]) {
            answer += prices[i] - prices[i-1] 
        }
    }
    return answer
};