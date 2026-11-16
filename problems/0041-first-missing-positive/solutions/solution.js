/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i=0; i<nums.length; i++) 
        if (nums[i] < 1) nums[i] = nums.length+1;

    for (let i=0; i<nums.length; i++) 
        if (Math.abs(nums[i]) <= nums.length && nums[Math.abs(nums[i])-1] > 0)
            nums[Math.abs(nums[i])-1] *= -1;

    for (let i=0; i<nums.length; i++) 
        if (nums[i] > 0) return i+1;

    return nums.length+1;
};
