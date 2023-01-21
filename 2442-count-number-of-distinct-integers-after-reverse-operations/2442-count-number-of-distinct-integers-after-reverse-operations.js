/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set(nums)
    nums.forEach(e => {
        let a = Number(e.toString().split('').reverse().join(''))
        set.add(a)
    })
    return set.size
};