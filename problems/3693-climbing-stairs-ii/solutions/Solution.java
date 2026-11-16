class Solution {
    public int climbStairs(int n, int[] costs) {
        int[] result = new int[n+1];

        result[0] = 0;
        int stepCost = 0;
        int totalStepCost = 0;
        int bestStep = 0;

        for (int i=1; i<n+1; i++){
            bestStep = Integer.MAX_VALUE;

            for (int j=1; j<=3; j++) {
                if (i-j < 0) break;

                totalStepCost = result[i-j] + costs[i-1] + j*j;
                if (totalStepCost < bestStep) bestStep = totalStepCost;
            }
            result[i] = bestStep;
        }
        return result[result.length-1];
    }
}
