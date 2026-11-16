class Solution {
    public int countValidSelections(int[] nums) {
        
        int numsSum = Arrays.stream(nums).sum();
        int leftSum = 0;
        int result = 0;

        for (int i=0; i<nums.length; i++) {
            leftSum += nums[i];
            if (nums[i] == 0) {
                int rightSum = numsSum - leftSum;
                if (leftSum == rightSum) result+=2;
                else if (leftSum == rightSum+1 || leftSum+1 == rightSum) result+=1;
            }
        }
        return result;    
    }

}
// probably faster now lol
