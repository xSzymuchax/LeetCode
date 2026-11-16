/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
    const sortingOrder = (a,b) => a[0]-b[0] || a[1]-b[1] || a[2]-b[2];
    const free = new PriorityQueue(sortingOrder, servers.map((w,i) => [0, w, i]));

    const result = [];
    const busy = new PriorityQueue(sortingOrder);

    for (const [s,t] of tasks.entries()) {
        while (!busy.isEmpty() && busy.front()[0] <= s) {
            const [,w,i] = busy.dequeue();
            free.enqueue([0,w,i]);
        }
        const [at, w, i] = (free.isEmpty() ? busy : free).dequeue();
        busy.enqueue([Math.max(at, s) + t, w, i]);
        result.push(i);
    }

    return result;
};
