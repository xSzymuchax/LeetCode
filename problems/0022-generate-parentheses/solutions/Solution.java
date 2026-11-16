class Solution {
    private List<String> generate(String current, int openedLeft, int closedLeft) {
        
        if (openedLeft == 0 && closedLeft == 0) {
            List<String> arr = new ArrayList<String>();
            arr.add(current);
            return arr;
        }

        if (closedLeft < openedLeft) return new ArrayList<String>();

        List<String> result = new ArrayList<>();
        List<String> result2 = new ArrayList<>();
     
        if (openedLeft > 0) {
            result.addAll(generate(current + "(", openedLeft - 1, closedLeft));
        }

        if (closedLeft > openedLeft) {
            result.addAll(generate(current + ")", openedLeft, closedLeft - 1));
        }
        return result;
    }

    public List<String> generateParenthesis(int n) {
        return generate("", n, n);
    }
}
