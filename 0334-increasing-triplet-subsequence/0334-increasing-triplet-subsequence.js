/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let Max1 = Infinity
    let Max2 = Infinity
    for(i=0 ; i< nums.length; i++) {
        if(Max1 < Max2 && Max2 < nums[i]) return true
        if( nums[i] < Max1) Max1 = nums[i]
        if( nums[i] > Max1 && nums[i] < Max2) Max2 = nums[i]
        
    }
    return false
};