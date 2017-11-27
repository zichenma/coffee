// https://www.youtube.com/watch?v=hv-mJUs5mvU
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new LinkedList<Integer>();
        if (root == null) {
            return res;
        }
        
        postHelper(res, root);
        
        return res;
    }
    
    private void postHelper(List<Integer> res, TreeNode root) {
        if (root == null) {
            return;
        }
        postHelper(res, root.left);
        postHelper(res, root.right);
        res.add(root.val);
    }
}

class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        if (root == null) {
            return res;
        }
        
        Stack<TreeNode> s = new Stack<TreeNode>();
        Stack<TreeNode> output = new Stack<TreeNode>();
        s.push(root);
        
        while (!s.isEmpty()) {
            // need a pointer curr, so that when root == null, it will come back to root
            TreeNode curr= s.pop();
            output.push(curr);
            if (curr.left != null) {
                s.push(curr.left);
            }
            if (curr.right != null) {
                s.push(curr.right);
            }
          
        }
        while (!output.isEmpty()) {
            res.add(output.pop().val);
        }
        return res;
    }
}