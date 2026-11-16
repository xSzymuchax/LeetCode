function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 0)
        return "";

    let shortestWorld = 9999;
    for (const s of strs)
        if (s.length < shortestWorld)
            shortestWorld = s.length;

    let commonPrefix = strs[0].slice(0, shortestWorld);
    let nextPrefix = "";
    for (const s of strs){
        nextPrefix = s.slice(0, shortestWorld);
        while (commonPrefix != nextPrefix){
            shortestWorld--;
            commonPrefix = strs[0].slice(0, shortestWorld);
            nextPrefix = s.slice(0, shortestWorld);
        }
    }

    return commonPrefix;
};
