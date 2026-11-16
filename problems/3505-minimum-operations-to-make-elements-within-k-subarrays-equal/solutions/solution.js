/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */

// this is solved using my research and GPT.

var minOperations = function(nums, x, k) {
    class FenwickTree {
        constructor(n) {
            this.n = n;
            this.tree = Array(n+1).fill(0);
        }

        add (i, delta) {
            for (; i<this.tree.length; i += i & -i)
                this.tree[i] += delta;
        }

        query(i) {
            let sum =0;
            for (; i>0; i-= i & -i) 
                sum += this.tree[i];
            return sum;
        }

        findK(k) {
            let idx = 0;

            let step = 1;
            while ((step << 1) <= this.n) {
                step <<= 1;
            }

            for (; step > 0; step >>= 1) {
                let next = idx + step;

                if (next <= this.n && this.tree[next] < k) {
                    idx = next;
                    k -= this.tree[next];
                }
            }
            return idx + 1;
        }
    }
    
    
    // Coordinate compression
    const n = nums.length;
    const sorted = [...new Set(nums)].sort((a, b) => a - b);

    const rank = new Map();

    for (let i = 0; i < sorted.length; i++) {
        rank.set(sorted[i], i + 1);
    }

    // Dwa Fenwick Tree
    const countBIT = new FenwickTree(sorted.length);
    const sumBIT = new FenwickTree(sorted.length);

    let totalSum = 0;

    // Dodawanie elementu do okna
    const add = (value, delta) => {
        const r = rank.get(value);

        countBIT.add(r, delta);
        sumBIT.add(r, value * delta);

        totalSum += value * delta;
    };

    // Usuwanie i dodawanie elementów
    const remove = (value) => {
        add(value, -1);
    };

    // Koszt aktualnego okna
    const calculateWindowCost = () => {

        // Pozycja mediany w multizbiorze
        const medianRank = countBIT.findK(
            Math.ceil(x / 2)
        );

        // Wartość mediany
        const median = sorted[medianRank - 1];

        // Liczba elementów <= median
        const countLeft = countBIT.query(medianRank);

        // Suma elementów <= median
        const sumLeft = sumBIT.query(medianRank);

        // Koszt lewej strony
        const leftCost =
            median * countLeft - sumLeft;

        // Koszt prawej strony
        const rightCost =
            (totalSum - sumLeft) -
            median * (x - countLeft);

        return leftCost + rightCost;
    };

    const costs = Array(n - x + 1).fill(0);

    // Budujemy pierwsze okno
    for (let i = 0; i < x; i++) {
        add(nums[i], 1);
    }

    costs[0] = calculateWindowCost();

    // Przesuwamy okno
    for (let i = 1; i <= n - x; i++) {

        // Element wychodzący
        remove(nums[i - 1]);

        // Element wchodzący
        add(nums[i + x - 1], 1);

        costs[i] = calculateWindowCost();
    }

    let dp = Array.from({length: nums.length - x + 1}, () => Array(k+1).fill(-1));
    const getMinCost = (index, remainingK) => {
        if (remainingK === 0) return 0;
        if (index > nums.length - remainingK*x) return Infinity;

        if (dp[index][remainingK] !== -1) return dp[index][remainingK];

        // now we either skip or take that
        let skip = getMinCost(index+1, remainingK);
        let take = costs[index] + getMinCost(index+x, remainingK-1);

        dp[index][remainingK] = Math.min(skip, take);
        return dp[index][remainingK];
    }

    return getMinCost(0,k);
};
