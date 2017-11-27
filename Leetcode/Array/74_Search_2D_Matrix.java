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
public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0) {
            return false;
        }
        if (matrix[0] == null || matrix[0].length == 0) {
            return false;
        }
        
        int row = matrix.length;
        int column = matrix[0].length;
        
        // find the row index, the last number <= target 
        int start = 0, end = row - 1;
        while (start + 1 < end) {
            int mid = start + (end - start) / 2;
            if (matrix[mid][0] == target) {
                return true;
            } else if (matrix[mid][0] < target) {
                start = mid;
            } else {
                end = mid;
            }
        }
        if (matrix[end][0] <= target) {
            row = end;
        } else if (matrix[start][0] <= target) {
            row = start;
        } else {
            return false;
        }
        
        // find the column index, the number equal to target
        start = 0;
        end = column - 1;
        while (start + 1 < end) {
            int mid = start + (end - start) / 2;
            if (matrix[row][mid] == target) {
                return true;
            } else if (matrix[row][mid] < target) {
                start = mid;
            } else {
                end = mid;
            }
        }
        if (matrix[row][start] == target) {
            return true;
        } else if (matrix[row][end] == target) {
            return true;
        }
        return false;
    }
}

