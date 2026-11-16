function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a-b);
    let l = 1;
    let r = nums.length-1;
    let result: number[][] = [];
    let sum = 0;

    for (let i=0; i<nums.length-2; i++){
        if (i > 0 && nums[i] == nums[i-1])
            continue;

        if (nums[i] > 0)
            break;

        l = i+1;
        r = nums.length-1;
        while (l<r){
            sum = nums[i] + nums[l] + nums[r];
            if (sum == 0){
                let arr = [nums[i], nums[l], nums[r]];
                result.push(arr);

                // just skip duplicates... lol
                while (l<r && nums[l] == nums[l+1])
                    l++;
                while (l<r && nums[r] == nums[r-1])
                    r--;

                l++;
                r--;
            } 
            else if (sum > 0) r--;
            else if (sum < 0) l++;
        }
    }

    return result;
};
