function lengthOfLongestSubstring(s: string): number {
    if (s.length==1)
        return 1;

    var startIndex = 0;
    var bestLength = 0;
    var set = new Set<string>();

    for (let i=0; i < s.length; i++ ){
            if (set.has(s[i])){
                if (bestLength < set.size)
                    bestLength = set.size;
                set.delete(s[startIndex]);
                startIndex++;
                i--;
                continue;
            }
            else
                set.add(s[i]);
    }

    if (bestLength < set.size)
        bestLength = set.size;

    return bestLength;
}
