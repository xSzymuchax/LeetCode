class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int i=0; i<9;i++){
            // check row
            Set<Character> row = new HashSet<>();
            for (int j=0; j<9; j++) {
                if (board[i][j] != '.') {
                    if (row.contains(board[i][j])) return false;
                    else row.add(board[i][j]);
                }
            }
            
            // check col
            Set<Character> col = new HashSet<>();
            for (int j=0; j<9; j++) {
                if (board[j][i] != '.') {
                    if (col.contains(board[j][i])) return false;
                    else col.add(board[j][i]);
                }
            }

            // chech square
            int StartX = (i % 3) * 3;
            int StartY = (i / 3) * 3;
            Set<Character> square = new HashSet<>();
            for (int x=0;x<3;x++)
                for (int y=0; y<3; y++){
                    if (board[StartX+x][StartY+y] == '.') continue;
                    if (square.contains(board[StartX+x][StartY+y])) return false;
                    else square.add(board[StartX+x][StartY+y]);
                }
        }
        return true;
    }
}
