// time O(n)
// 
// Using recusion in order traverse 
// steps: 
// 1. Edge case 
// 2. judge left node
// 3. judge middle node 
// 4. connect middle node 
// 5. judge right node 
// 6. return true

class Solution1 {
    // create a dummy node to connect root and left
    private TreeNode pre = null;
    public boolean isValidBST(TreeNode root) {
        // Edge case
        if (root == null) return true;
        // judge left 
        if (root.left != null && !isValidBST(root.left)) return false;
        // judge root, in BST, previous values should always smaller than after tree values
        // if pre.val large or equal the after values, it will break the rule
        if (pre != null && pre.val >= root.val) return false;
        // connect pre and curr
        pre = root;
        // judge right 
        if (root.right != null && !isValidBST(root.right)) return false;
        // return valid
        return true;
    } 
}
// Idea: Using while loop to do the in order traverse

public class Solution2 {
    public boolean isValidBST(TreeNode root) {
        // Edge case
        if(root == null) return true;
        // Using Stack to store current node
        Stack<TreeNode> stk = new Stack<TreeNode>();
        // Define two pointers
        TreeNode cur = root, previous = null;
        // while loop
        while (!stk.empty() || cur != null) {
            if (cur != null) {
                stk.push(cur);
                cur = cur.left;
            } else {
                cur = stk.pop();
                if (previous != null && previous.val >= cur.val) return false;
                previous = cur;
                cur = cur.right;
            }
        }

        return true;
    }
}
   