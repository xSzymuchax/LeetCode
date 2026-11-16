/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count =0;
    
    for (const a of arr1){
        let add=1;
        for (const b of arr2){
            if (Math.abs(a-b)<=d){
                add=0;
                break;
            }
        }
        count+=add;
    }
    return count;
};
