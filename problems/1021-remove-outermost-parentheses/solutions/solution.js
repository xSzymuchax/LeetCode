/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth = 0;
    let lastI =0;
    let tokens=[];
    for (let i=0;i<s.length; i++){
        if (s[i]=="(") depth++;
        else depth--;
        
        if (depth==0) {
            tokens.push(s.slice(lastI+1, i));
            lastI=i+1;
        }
    }
    
    return tokens.join("");
};
