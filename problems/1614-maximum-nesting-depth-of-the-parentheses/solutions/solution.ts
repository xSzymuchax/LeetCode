function maxDepth(s: string): number {
    let level=0;
    let maxLevel =0;
    
    for (const c of s) {
        if (c=="(")
            level++;
            
        if (c==")")
            level--;
            
        if (maxLevel<level)
            maxLevel=level;
    }
    
    return maxLevel;
};
