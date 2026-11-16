/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let result = 0;
    
    rows = Array(m).fill(0);
    cols = Array(n).fill(0);

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] == 1){
                rows[i] += 1;
                cols[j] +=1;
            }
        }
    }

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] == 1){
                if (rows[i] > 1 || cols[j] > 1) {
                    result += 1;
                }
            }
        }
    }

    return result;
};
