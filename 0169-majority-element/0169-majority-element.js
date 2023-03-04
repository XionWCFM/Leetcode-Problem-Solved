/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    let [answer,max] = [0,0]
    
    for(i=0 ; i<nums.length ;i++) {
        map.set( nums[i] , (map.get(nums[i]) || 0) + 1 )
        
        if(map.get(nums[i]) > max) {
            answer = nums[i]
            max = Math.max(map.get(nums[i]) , max)
        }
    }
    
    return answer
};