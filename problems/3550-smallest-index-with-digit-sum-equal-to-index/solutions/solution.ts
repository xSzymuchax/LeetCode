function smallestIndex(nums: number[]): number {
    for (let i=0;i<nums.length;i++) {
        let s =nums[i].toString();
        let sum = 0;
        
        for (const c of s){
            sum+=Number(c);
        }
        
        if (i==sum) return i;
    }
    
    return -1;
};
