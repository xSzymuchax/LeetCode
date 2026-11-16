/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    if (nums.length===1) return 0;

    nums = nums.sort((a,b) => a-b);

    let median = nums[Math.floor(nums.length/2)];

    let result = 0;
    for (const num of nums) 
        result += Math.abs(median-num);

    return result; 
};
