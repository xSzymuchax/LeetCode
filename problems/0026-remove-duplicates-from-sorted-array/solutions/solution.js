/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let writeIndex = 1;
    let last = nums[0];

    for (let i=1;i<nums.length;i++){
        if (nums[writeIndex-1] == nums[i]){
            continue;
        }
        nums[writeIndex] = nums[i];
        writeIndex++;
    }

    return writeIndex;
}; // 6min
