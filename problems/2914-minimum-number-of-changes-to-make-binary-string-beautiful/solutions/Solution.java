// this task tells us to divide the string into substrings of even length
// we also have to find minimum number of changes, to make the substrings have same characters
// using the fact, that s is even length, we can divide into substrings 
// of length 2.
// then if the substrings are not equal, we know we need to change one character.

class Solution {
    public int minChanges(String s) {
        int result = 0;
        for (int i = 0; i < s.length(); i += 2) {
            if (s.charAt(i) != s.charAt(i + 1)) {
                result++;
            }
        }
        return result;
    }
}

