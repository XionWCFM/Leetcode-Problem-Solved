/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [low,high] = [0,nums.length-1]
    if(nums[low] <= nums[high]) return nums[low]
    if(nums.length==1) return nums[0]

    while(low<high){
        let mid= Math.floor((low+high)/2)
        
        if (nums[mid]<nums[high]) high=mid
        else low=mid

        if(nums[high -1] > nums[high]) return nums[high]
        
    }
};
