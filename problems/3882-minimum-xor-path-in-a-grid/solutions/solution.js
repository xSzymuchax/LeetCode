/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const possibleXor = 
    Array.from({length: m}, () => {
        return Array.from({length: n}, () => {
            return new Set()
        })
    });

    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            if (i==0 && j==0) 
                possibleXor[i][j].add(grid[i][j]);

            if (i-1>=0) for (const x of possibleXor[i-1][j]) possibleXor[i][j].add(x ^ grid[i][j]);
            if (j-1>=0) for (const x of possibleXor[i][j-1]) possibleXor[i][j].add(x ^ grid[i][j]);
        }
    }

    var result = 2000;

    for (const x of possibleXor[m-1][n-1])
        if (result > x) result = x;

    return result;
}; // 62min
