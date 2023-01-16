/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(H) {
    let [ans,i,j] = [0,0,H.length-1]
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};