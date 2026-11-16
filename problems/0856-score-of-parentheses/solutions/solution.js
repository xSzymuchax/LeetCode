/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let answer = 0;
    let depth = 0;
    
    for (let i=0; i<s.length;i++){
        if (s[i]=="(") depth++;
        else {
            if (s[i-1]=="(") answer += Math.pow(2, depth-1);
            depth--;
        }
    }
    
    return answer;
};
