function smallestNumber(n: number, t: number): number {
    
    while (n<10) {
        if (n%t == 0) return n;
        n++;
    }
    
    while (true){
        let temp = n;
        
        let prod=1;
        while (temp > 0) {
            prod *= (temp%10);
            temp = Math.floor(temp/10);
        }
        
        if (prod % t == 0) return n;
        n++;
    }
};
