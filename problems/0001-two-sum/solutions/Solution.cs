public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> points = new();

        for (int i=0;i<nums.Length;i++){
            int lookingFor = target - nums[i];

            if (points.ContainsKey(lookingFor)) {
                return new[] {i, points[lookingFor]};
            }
            else {
                if (!points.ContainsKey(nums[i]))
                    points.Add(nums[i], i);
            }
        }

        return new int[0];
    }
}
