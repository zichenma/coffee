/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
 // https://www.youtube.com/watch?v=YBydLwI8pE0
public class Solution {
    private TreeNode pre = null; 
    
    public void flatten(TreeNode root) {
        // write your code here
        if (root == null) {
            return;
        }
        
        flatten(root.right);
        flatten(root.left);
        
        root.right = pre;
        root.left = null;
        pre = root;
    }
}

public class Solution2 {
    /*
     * @param root: a TreeNode, the root of the binary tree
     * @return: 
     */
    public void flatten(TreeNode root) {
        // write your code here
        if (root == null) {
            return;
        }
        Stack<TreeNode> s = new Stack<>();
        s.push(root);
        while(!s.isEmpty()) {
            TreeNode curr = s.pop();
            
            if(curr.right != null) {
                s.push(curr.right);
            }
            if(curr.left != null) {
                s.push(curr.left);
            }
            if (!s.isEmpty()) {
                curr.right = s.peek();
            }
            
            curr.left = null;
        }
    }
}