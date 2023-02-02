/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let map = new Map()
    let answer = [0]
    for(i=0; i<nums.length ;i++) {
        let val = map.get(nums[i]) 
        map.set(nums[i], (val||0) +1 )
        if(map.get(nums[i]) === 2) {
            answer[0]++
            map.delete(nums[i])
        }
    }
    answer.push(map.size)
    return answer
};