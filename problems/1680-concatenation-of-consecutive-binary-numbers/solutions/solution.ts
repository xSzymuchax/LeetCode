function concatenatedBinary(n: number): number {
    let modulo = 1000000007;
    let ans = 0;
    let bits=0;

    for (let i=1;i<=n;i++){
        // check if next numbers need more space (1000 - 0001 = 0111) | 1000 AND 0111 -> 0000
        if ((i & (i-1)) === 0){
            bits++;
        }

        ans = ans * (1 << bits);
        ans += i;
        ans %= modulo;
    }

    return ans;
};
