/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let result = Array(m);

    for (let x=0; x<m; x++)
        result[x] = "." + "#".repeat(n-1);

    result[m-1] = ".".repeat(n);

    return result;
};
