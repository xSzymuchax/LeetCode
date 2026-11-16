function smallestPalindrome(s: string): string {
    if (s.length == 1) return s;
    
    let sliceSize = Math.floor(s.length/2);
    let letters: number[] = new Array(26).fill(0);

    for (let i=0; i<sliceSize; i++){
        letters[s.charCodeAt(i)-97]++;
    }

    let l: string = "";
    let r: string = "";
    for (let i=0;i<26;i++){
        if (letters[i] > 0){
            l = l + String.fromCharCode(97+i).repeat(letters[i]);
            r = String.fromCharCode(97+i).repeat(letters[i]) + r;
        }
    }

    if (s.length % 2 == 1)
        l += s[sliceSize];

    return l + r;
};
