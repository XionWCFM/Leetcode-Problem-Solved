/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a,b) => a-b)
    let [left , right , equal] = [0, skill.length -1 , skill[0] + skill[skill.length-1]]
    let answer = 0
    
    while(left <= right) {
        let pusher = skill[left] * skill[right]
        let reducer = skill[left] + skill[right]
        
        if(reducer == equal) answer += pusher
        else return -1
        
        left += 1
        right -= 1
        
    } 
    return answer
};