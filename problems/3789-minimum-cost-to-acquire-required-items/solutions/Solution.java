class Solution {
    public long minimumCost(int cost1, int cost2, int costBoth, int need1, int need2) {
        long total = 0;  
        long minNeed = Math.min(need1, need2);

        if (need1 > 0 && need2 > 0){
            if (cost1 + cost2 < costBoth) total += minNeed * (long)(cost1 + cost2);
            else total += (long)costBoth*minNeed;

            need1-=minNeed;
            need2-=minNeed;
        }

        if (need1 > 0) {
            if (cost1 < costBoth) total+= (long)cost1*need1;
            else total+=(long)costBoth*need1;
        }

        if (need2 > 0) {
            if (cost2 < costBoth) total+= (long)cost2*need2;
            else total+=(long)costBoth*need2;
        }
       return total;
    }
}
