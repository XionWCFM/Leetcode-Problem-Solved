/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let high = new Set(["q" ,"w" , "e" , "r" , "t" ,"y" , "u", "i", "o" , "p"])
    let mid = new Set(["a" ,"s" , "d" , "f" , "g" ,"h" , "j", "k" , "l"])
    let low = new Set(["z" ,"x" , "c" , "v" , "b" ,"n" , "m"])
    let answer = []
    words.forEach(ele => {
        spliter = ele.toLowerCase().split('')
        if(spliter.every(e => high.has(e) ) ) {
            answer.push(ele)
        }
        if(spliter.every(e => mid.has(e))) {
            answer.push(ele)
        }
        if(spliter.every(e => low.has(e))) {
            answer.push(ele)
        }
    })
    return answer
};