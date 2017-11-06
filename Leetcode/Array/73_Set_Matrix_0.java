// https://www.youtube.com/watch?v=-I8w2_sN93c
// Time: O(m * n); Space: O(1)
// Idea: almost brute & force
// 1. if there are 0 in first row and col mark as hasZeor as true
// 2. start with the second row/col (i = 1, j = 1), if matrix[i][j] == 0
// mark the its first row and col position as zero
// 3. leave the first col and first row, scan the second col, if it contains 0, mark its row as 0
// 4. leave the first col and first row, scan the second row, if it contains 0, mark its col as 0
// 5. scan the first col and first rwo if they cantains true, mark them as 0s

// Steps: 
// 1. edge case
// 2. find hasZero (T/F) first row, col
// 3. mark first r/c 0, from second r/c
// 4. leave first r/c, if first r/c has 0, mark r/c 0, 
// 5. if first r/c has 0, mark r/c 

class Solution {
   public void setZeroes (int[][] matrix) {
    // Edge case:
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return;
    // zero marker for first R/C
    boolean firstRowZero = false;
    boolean firstColZero = false;
    // find first row has zero
    for (int i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            firstRowZero = true;
            break;
        }
       
    }
    // find first col has zero
    for (int i = 0; i < matrix.length; i++) {
          if (matrix[i][0] == 0) {
              firstColZero = true;
              break;
          }
    }
    // mark first r/c element as 0 start from the second r/c
    for (int x = 1; x < matrix[0].length; x++) {
        for (int y = 1; y < matrix.length; y++) {
            if (matrix[y][x] == 0) {
                matrix[y][0] = 0;
                matrix[0][x] = 0;
            }
        }
    }
    // leave the first col, if first col has 0, mark row element as 0
    for (int i = 1; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            for (int j = 1; j < matrix.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    // leave the first row, if first row has 0, mark col element as 0
    for (int i = 1;  i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            for (int j = 1; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    // deal with first r/c has 0
    if (firstRowZero) for (int j = 0; j < matrix[0].length; j++) matrix[0][j] = 0;
    if (firstColZero) for (int j = 0; j < matrix.length; j++) matrix[j][0] = 0;

}
}