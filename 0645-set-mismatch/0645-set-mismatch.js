/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = new Map()
    let answer = []
    nums.forEach(ele => {
        map.set(ele , (map.get(ele) || 0) +1)
        if(map.get(ele) == 2) {
            answer.push(ele)
        }
    })
    for(i=1 ; i<=nums.length; i++) {
        if(map.get(i) == undefined) {
            answer.push(i)
            break
        }
    }
    return answer
};