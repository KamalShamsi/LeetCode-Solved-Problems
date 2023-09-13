/**

Determine if a given 9x9 Sudoku board is valid

 * @param {character[][]} board - The 9x9 Sudoku board
 * @return {boolean}    - Returns true if the Sudoku board is valid, otherwise return false
 */
var isValidSudoku = function(board) {
    /**
     * Validates if a 3x3 box within the board is valid.
     *
     * @param {number} startRow - The starting row index for the box.
     * @param {number} startCol - The starting column index for the box.
     * @return {boolean} - Returns true if the box is valid, otherwise returns false.
     */

    function isBoxValid(startRow, startCol) {
        const seen = new Set();
        for (let row = 0; row < 3; row++) {
            for ( let col = 0; col < 3; col++) {
                const num = board[startRow + row][startCol + col];
                if (num !== '.' && seen.has(num)) return false;
                seen.add(num);
            }
        }
        return true;
    }

    // Validate rows and columns
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        for (let j = 0; j < 9; j++) {
            // Check for duplicates in the row
            if (board[i][j] !== '.' && rowSet.has(board[i][j])) return false;
            rowSet.add(board[i][j]);

            // Check for duplicates in the column
            if (board[j][i] !== '.' && colSet.has(board[j][i])) return false;
            colSet.add(board[j][i]);
        }
    }

    // Validate the 3x3 boxes
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col +=3) {
            if (!isBoxValid(row, col)) return false;
        }
    }

    return true;
};