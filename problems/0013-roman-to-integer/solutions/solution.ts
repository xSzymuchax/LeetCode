function romanToInt(s: string): number {
    let dict = new Map<string, number>([
        ['I',1], ['V',5], ['X',10], ['L',50], ['C',100], ['D',500], ['M',1000]
    ]);

    let result = 0;
    let lastValue = 1000000;
    for (let i=0; i<s.length; i++){
        result += dict.get(s[i]);
        if (lastValue < dict.get(s[i])){
            result -= (lastValue*2);
        }
        lastValue = dict.get(s[i]);
    }

    return result;
};
