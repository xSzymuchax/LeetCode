/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array.from({length: m}, () => {
        return Array.from({length: n}, () => {
            return Array(2).fill(0)
        })}
    );

    // down (0)
    // right (1)
    dp[0][0][0] = 1;

    const MODULO = 1000000007;

    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            if (grid[i][j] == 0){
                if (i+1 < m) {
                    dp[i+1][j][0] = ( dp[i+1][j][0] + dp[i][j][0] + dp[i][j][1]) % MODULO;
                }

                if (j+1 < n) {
                    dp[i][j+1][1] = (dp[i][j+1][1] + dp[i][j][0] + dp[i][j][1]) % MODULO;
                }
            }
            else {
                if (i+1 < m) {
                    dp[i+1][j][0] = ( dp[i+1][j][0] + dp[i][j][1]) % MODULO;
                }

                if (j+1 < n) {
                    dp[i][j+1][1] = (dp[i][j+1][1] + dp[i][j][0]) % MODULO;
                }
            }
        }
    }

    return (dp[m-1][n-1][0] + dp[m-1][n-1][1]) % MODULO;
}; //68min
