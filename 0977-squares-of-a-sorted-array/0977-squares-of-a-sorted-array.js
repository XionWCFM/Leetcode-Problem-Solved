/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answer = nums.map(e => e**2).sort((a,b) => a-b)
    return answer
};