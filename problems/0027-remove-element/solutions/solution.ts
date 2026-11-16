function removeElement(nums: number[], val: number): number {
    let last = nums.length-1;
    for (let i=0; i<nums.length; i++){
        if (nums[i] == val){
            while (nums[last] == val){
                last--;
            }
            if (last <= i) return last+1;
            nums[i] = nums[last];
            last--;
        }
    }

    return last+1;
};
