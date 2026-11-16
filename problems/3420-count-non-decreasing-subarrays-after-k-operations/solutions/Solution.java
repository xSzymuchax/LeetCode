class Solution {
    // non-decreasing -> 1.1.2.3.4.4.4.5.6
    public long countNonDecreasingSubarrays(int[] nums, int k) {
        int n = nums.length;

        Deque<int[]> deque = new ArrayDeque<>();

        int R = n-1;
        long cost = 0;
        long result = 0;

        for (int L=n-1; L>=0; L--){
            int x = nums[L];
            int count = 1;

            // add
            while (!deque.isEmpty() && deque.peekFirst()[0] <= x) {
                int[] p = deque.removeFirst();
                cost += (long) (x - p[0]) * p[1];
                count += p[1];
            }

            deque.addFirst(new int[] {x, count});

            while (cost>k) {
                int[] p = deque.peekLast();
                cost -= (long) (p[0] - nums[R]);
                p[1]--;
                if (p[1] == 0) deque.removeLast();
                R--;
            }
            result += R-L+1;
        }

        return result;
    }
}
