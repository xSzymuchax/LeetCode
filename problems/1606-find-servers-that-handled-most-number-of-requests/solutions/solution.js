/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    // index | when free | tasksDone
    // sort by the first moment server can process
    const free = new PriorityQueue((a,b) => a[1]-b[1], Array.from({length: k}, (_, i) => [i, i, 0]));
    const busy = new PriorityQueue((a,b) => a[1]-b[1]);

    let currentTime = 0;
    for (let i=0; i<arrival.length; i++){
        currentTime = arrival[i];

        // i + (server[0] - i % k + k) % k -> key to solve

        while (!busy.isEmpty() && busy.front()[1] <= currentTime) {
            let server = busy.dequeue();
            let nextTurn = i + (server[0] - i % k + k) % k;

            server[1] = nextTurn;
            free.enqueue(server);
        }

        if (!free.isEmpty()) {
            let server = free.dequeue();
            server[1] = currentTime + load[i];
            server[2]++;
            busy.enqueue(server);
        }
    }

    // gather all and find result
    let i=0;
    const finalArray = Array(k);
    while (busy.size() != 0) {
        finalArray[i] = busy.dequeue();
        i++;
    }

    while (free.size() != 0) {
        finalArray[i] = free.dequeue();
        i++;
    }

    let maximum = Math.max(...finalArray.map(x => x[2]));
    let result = finalArray.filter(x => x[2] == maximum);

    return result.map(x => x[0]);
};
