function letterCombinations(digits: string): string[] {
    let mapping = new Map<string, string>([
        ['2','abc'], ['3','def'], ['4','ghi'], ['5','jkl'], 
        ['6','mno'], ['7','pqrs'], ['8','tuv'], ['9','wxyz']
    ]);

    let result: string[] = [];

    for (let i=0; i<digits.length; i++){
        let digit = digits[i];

        if (result.length == 0){
            for (let char of mapping.get(digit).split("")){
                result.push(char);
            }
        }
        else{
            let chars = mapping.get(digit).split("");
            let newResult: string[] = [];

            result.forEach(element => {
                chars.forEach(char => {
                    newResult.push(element+char);
                });
            });
            result = newResult;
        }
    }
    return result;
};
