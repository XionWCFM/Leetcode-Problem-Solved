/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    if(!nums.filter(ele => ele != 0).length) return '0'
    nums.sort( (a,b) => {
        let as = a.toString()
        let bs = b.toString()
        return parseInt(as + bs) > parseInt(bs + as) ? -1 : 1
    })
    
    return nums.join('') 
};