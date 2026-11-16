function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length-1;

    while (l <= r){
        let half = Math.floor((l+r)/2);
        if (nums[half] == target)
            return half;
        else if (nums[half] > target)
            r = half-1;
        else
            l = half+1;
    }

    return l;
};
