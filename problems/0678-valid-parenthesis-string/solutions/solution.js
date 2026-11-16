/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minOpen = 0;
    let maxOpen = 0;
    
    for (const c of s) {
        if (c=="("){
            minOpen++;
            maxOpen++;
        }
        
        else if (c==")"){
            minOpen--;
            maxOpen--;
        }
        
        else {
            minOpen--;
            maxOpen++;
        }
        
        if (minOpen < 0) minOpen=0;
        if (maxOpen<0) return false;
        
    }
    
    if (minOpen==0) return true;
    return false;
    
};
