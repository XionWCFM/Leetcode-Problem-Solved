/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()
    
    for(i=0 ; i<nums.length ;i++) {
        map.set(nums[i] , (map.get(nums[i])||0) +1 )
        if(map.get(nums[i]) == 2) {
            map.delete(nums[i])
        }
    }
    return [...map][0][0]
};