function myAtoi(s: string): number {
    s = s.trim();

    if (s.length <= 0)
        return 0;

    let minusFlag = 0;
    let plusFlag = 0;

    if (s[0] == "-")
        minusFlag = 1;

    if (s[0] == "+")
        plusFlag = 1;

    if (!minusFlag && !plusFlag)
        plusFlag=1;
    else 
        s = s.slice(1);

    let numLength = 0;
    for (let i=0; i<s.length; i++){
        if (s[i] >= '0' && s[i] <= '9'){
            numLength++;
        }
        else{
            break;
        }
    }

    s = s.slice(0, numLength);
    let zeros = 0;
    for (let i=0; i<s.length; i++)
        if (s[i] == '0')
            zeros++;
        else
            break;
    
    s = s.slice(zeros);

    if (s.length==0)
        return 0;

    let INT_MAX = Math.pow(2,31)-1;
    let INT_MIN = Math.pow(2,31);

    let num = 0;

    for (const c of s){
        let digit = c.charCodeAt(0) - 48;

        if (plusFlag==1) {
            if (num > Math.floor(INT_MAX/10) || 
                num == Math.floor(INT_MAX/10) && digit > 7)
                return INT_MAX;
        }
        else {
            if (num > Math.floor(INT_MIN/10) || 
                num == Math.floor(INT_MIN/10) && digit > 8)
                return -INT_MIN;
        }    

        num = num * 10 + digit;
    }

    if (minusFlag==1)
        return -num;

    return num;
};
