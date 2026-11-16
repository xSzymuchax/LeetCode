/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const GCD = (a,b) => b===0 ? a : GCD(b, a % b);

    const prefixGcd = Array(nums.length);

    let mxi = nums[0];
    for (let i=0; i<nums.length; i++){
        if (mxi <= nums[i]) mxi = nums[i];
        prefixGcd[i] = GCD(nums[i], mxi);   
    }

    const sorted_prefixGcd = prefixGcd.sort((a,b) => a-b);

    // 0 - n
    // 1 - n-1
    // ...
    let sum = 0
    for (let i=0; i<(sorted_prefixGcd.length-1) / 2; i++){
        sum += GCD(sorted_prefixGcd[i], sorted_prefixGcd[sorted_prefixGcd.length-i-1]);
    }

    return sum;
};
