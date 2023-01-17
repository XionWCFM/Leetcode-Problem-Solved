/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [answer,buy] = [0,Infinity]
    for(i=0 ; i<prices.length ; i++) {
        if(buy > prices[i]) {
            buy = prices[i]
        }
        else {
            answer = Math.max(answer , prices[i]-buy)
        }
    }
    return answer
};