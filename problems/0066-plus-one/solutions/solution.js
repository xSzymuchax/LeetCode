/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let currentIndex = digits.length-1;
    while (true){
        if (currentIndex>=0)
            digits[currentIndex]++;
        else
            digits.unshift(1);

        if (digits[currentIndex] >= 10) 
            digits[currentIndex]=0;
        else
            break;

        currentIndex--;
        if (currentIndex==-2) break;
    }
    return digits;
};
