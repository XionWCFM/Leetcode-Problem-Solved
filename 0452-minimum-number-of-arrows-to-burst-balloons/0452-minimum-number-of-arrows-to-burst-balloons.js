/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let answer =  1
    points.sort((a,b) => {
        return a[1] - b[1]
    })
    console.log(points)
    let pointer = points[0][1]
    
    for(i=1 ; i<points.length; i++) {
        if(pointer >= points[i][0]) continue
        else {
            pointer = points[i][1]
            answer++
        }
    }
    return answer
};