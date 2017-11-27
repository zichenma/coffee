/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private int NOT_BALANCE = -1;
    public boolean isBalanced(TreeNode root) {
        // write your code here
        if (root == null) {
            return true;
        }
        
        return treeHigh(root) != NOT_BALANCE;
    }
    
    private int treeHigh (TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        int left = treeHigh(root.left);
        int right = treeHigh(root.right);
        
        if (left == NOT_BALANCE || right == NOT_BALANCE) {
            return NOT_BALANCE;
        }
        if (Math.abs(right - left) > 1) {
            return NOT_BALANCE;
        }
        
        return Math.max(left , right) + 1;
    }
}