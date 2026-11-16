/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
    logs = logs.sort((a,b) => a[1]-b[1]);
    let queries_sorted = [...queries].sort((a,b) => a-b);
    
    let L=0;
    let R=0;
    let result = Array(queries.length).fill(0);
    let resultMap = new Map();
    let tempMap = new Map();
    let receivingServers = 0;

    for (let i=0; i<queries_sorted.length;i++) {
        let q = queries_sorted[i];
        let start = q-x;
        let end = q;
        
        while (R < logs.length && logs[R][1] <= end){
            let server = logs[R][0];
            if (!tempMap.has(server)) {
                tempMap.set(server, 1);   
                receivingServers++;
            } 
            else tempMap.set(server, tempMap.get(server)+1);
                        
            R++;
        }

        while (L<R && logs[L][1] < start){
            let server = logs[L][0];
            tempMap.set(server, tempMap.get(server)-1);
            if (tempMap.get(server) === 0) {
                receivingServers--;
                tempMap.delete(server);   
            }
            L++;
        }
        

        resultMap.set(q, n - receivingServers);
    }

    for (let i=0; i<queries.length;i++){
        result[i] = resultMap.get(queries[i]);
    }

    return result;
};
