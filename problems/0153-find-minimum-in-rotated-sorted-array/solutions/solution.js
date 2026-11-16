/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length == 1) return nums[0];

    var L = 0;
    var R = nums.length-1;
    var mid = Math.floor((L+R)/2);

    while (L!=R){
        if (nums[R]>nums[mid]) R=mid;
        else L=mid+1;

        mid = Math.floor((L+R)/2);  
    }

    return nums[L];
};// 20min
