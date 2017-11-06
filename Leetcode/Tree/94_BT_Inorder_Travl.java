// Time: O(n)
// idea: recursion 
// Steps:
// 1. create return, call helper, return;
// 2. Recursion:
      // 1. base case
      // 2. left travel
      // 3. middle
      // 4. right travel

class Solution1 {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new LinkedList<Integer>();
        recursion(root, res);
        return res;
    }
    
    private void recursion(TreeNode root, List<Integer> res) {
        // base case: when root == null means to the end, here should stop recursion
        if (root == null) return;
        recursion(root.left, res);
        res.add(root.val);
        recursion(root.right, res);
    }
}
// Idea: whle + stack
class Solution2 {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new LinkedList<Integer>();
        if (root == null) return res;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        while(!stack.empty() || root != null) {
            if (root != null) {
             stack.push(root);
             root = root.left;
            } else {
             root = stack.pop();
             res.add(root.val);
             root = root.right;
            }
        }
        return res;
    }
}

