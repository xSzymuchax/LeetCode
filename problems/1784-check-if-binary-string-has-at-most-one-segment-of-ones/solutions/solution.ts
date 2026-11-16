function checkOnesSegment(s: string): boolean {
    let metZero = false;
    for (let i=0;i<s.length;i++){
        if (!metZero && s[i] == '0'){
            metZero = true;
        }
        else if (metZero && s[i] == '1'){
            return false;
        }
    }
    return true;
};
