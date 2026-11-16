class Solution {
    private boolean recurentSolver(int[] tile, char[][] board, List<Set<Character>> rows, List<Set<Character>> cols, List<Set<Character>> squares) {
        if (tile[0] == 9) return true;

        for (int n = 1; n <= 9; n++) {
            // find square
            char num = (char) ('0' + n);
            int squareIndex = (tile[0] / 3) * 3 + (tile[1] / 3);

            //check if legal
            if (rows.get(tile[0]).contains(num)) continue;
            if (cols.get(tile[1]).contains(num)) continue;
            if (squares.get(squareIndex).contains(num)) continue;

            //add to board and existing sets
            rows.get(tile[0]).add(num);
            cols.get(tile[1]).add(num);
            squares.get(squareIndex).add(num);
            board[tile[0]][tile[1]] = num;

            // find next missing field
            int[] tile2 = nextTile(tile[0], tile[1], board);

            // if got false, back the changes and try next
            boolean result = recurentSolver(tile2, board, rows, cols, squares);
            if (result) return true;
            else {
                rows.get(tile[0]).remove(num);
                cols.get(tile[1]).remove(num);
                squares.get(squareIndex).remove(num);
                board[tile[0]][tile[1]] = '.';
            }
        }

        // couldnt fit 
        return false;
    }

    private int[] nextTile(int i, int j, char[][] board) {
        while (i<9) {
            j++;
            if (j==9) {
                i++; j=0;
            }
            if (i==9) break;
            if (board[i][j] == '.') break;
        }

        return new int[] {i,j};
    }

    public void solveSudoku(char[][] board) {
        
        List<Set<Character>> rows = new ArrayList<>();
        List<Set<Character>> cols = new ArrayList<>();
        List<Set<Character>> squares = new ArrayList<>();

        for (int i=0; i<9;i++){
            // check row
            Set<Character> row = new HashSet<>();
            Set<Character> col = new HashSet<>();
            for (int j=0; j<9; j++) {
                if (board[i][j] != '.') row.add(board[i][j]);
                if (board[j][i] != '.') col.add(board[j][i]);
            }
            rows.add(row);
            cols.add(col);

            // chech square
            int StartX = (i / 3) * 3;
            int StartY = (i % 3) * 3;
            Set<Character> square = new HashSet<>();
            for (int x=0;x<3;x++)
                for (int y=0; y<3; y++)
                    if (board[StartX+x][StartY+y] != '.') square.add(board[StartX+x][StartY+y]);
            squares.add(square);
        }

        int[] tile = nextTile(0, -1, board);
        recurentSolver(tile, board, rows, cols, squares);
    }
}
