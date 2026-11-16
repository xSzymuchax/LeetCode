/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let maximum = nums[0];
    
    let result=0;
    for (const num of nums) {
        if (num>maximum)
            maximum=num;
        result+=num;
    }
            
    return maximum*nums.length - result;
};
