/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(0 > x) return false
    
    let rever = x.toString().split('').reverse().join('')
    return rever == x ? true : false 
};