function detectCapitalUse(word: string): boolean {
    let smallWord = word.toLowerCase();
    if (smallWord == word)
        return true;
    
    if (smallWord.slice(1) == word.slice(1))
        return true;

    let bigWord = word.toUpperCase();
    if (bigWord == word)
        return true;
    
    return false;
};
