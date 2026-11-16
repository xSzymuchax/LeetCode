function maxProduct(nums: number[]): number {
    let l = 0;
    let r = nums.length-1;
    let maxL = l;
    let maxR = r;

    for (let i=0; i<nums.length; i++){
        if (nums[l] > nums[maxL] && l != maxR)
            maxL = l;
        if (nums[r] > nums[maxR] && r != maxL)
            maxR = r;

        l++;
        r--;
    }

    return (nums[maxL]-1)*(nums[maxR]-1);
};
