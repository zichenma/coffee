// exactly same solution as 240
// https://www.youtube.com/watch?v=DmP0LNDAR9E

// time: O(m + n)
// find the top right corner element and compare the target with this corner element
// if target equal corner return true; 
// if target smaller than corner, find target at left side (j--)
// Otherwise find the target below the first row

class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {
      // Step 1: Corner case
            if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {return false;}
            // Step 2: Initialize corner element
            int i = 0, j = matrix[0].length - 1;
            // Step 3: find target right down direction 
            while (i < matrix.length && j >= 0) {
                    if (matrix[i][j] == target) {
                        return true;
                    } else if (matrix[i][j] > target) {
                        //if [i][j] < target should search from right to left
                        j--;
                    } else {
                        i++;
                    }
                }
            return false;
        }
}

// Dichotomy : https://www.youtube.com/watch?v=R5mcIwLBtWI&t=15
class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {
            if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {return false;}
            int startRow = 0;
            int endRow = matrix.length - 1;
            int endCol = matrix[0].length - 1;
            int row = -1;
            while (startRow + 1 < endRow) {
                int mid = startRow + (endRow - startRow) / 2;
                if (matrix[mid][endCol] < target) {
                    startRow = mid;
                } else {
                    endRow = mid;
                }
            }
            if (matrix[startRow][endCol] >= target) {
                row = startRow;
            } else if (matrix[endRow][endCol] >= target) {
                row = endRow;
            } else {
                return false;
            }

            int start = 0;
            int end = endCol;
            while (start + 1 < end) {
                int mid = start + (end - start) / 2;
                if (matrix[row][mid] < target) {
                    start = mid;
                } else {
                    end = mid;
                }
            }
            if (matrix[row][start] == target || matrix[row][end] == target) {
                return true;
            } else {
                return false;
            }
        }
}

