class Solution1 {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        if (root == null) {
            return res;
        }
        preorderHelper(root, res);
        return res;
    }
    private void preorderHelper(TreeNode root, List<Integer> res) {
        if (root == null) {
            return; 
        }
        res.add(root.val);
        preorderHelper(root.left, res);
        preorderHelper(root.right, res);
    }
}

class Solution2 {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new LinkedList<>();
        if (root == null) {
            return res;
        }
        Stack<TreeNode> s = new Stack<>();
        TreeNode curr = root;
        boolean done = false;
        
        while (!done) {
            if (curr != null) {
                 s.push(curr);
                 res.add(curr.val);
                curr = curr.left;
            } else {
                if (s.isEmpty()) {
                    done = true;
                } else {
                  curr = s.pop();
                  curr = curr.right;
                 
                }
            }
        
        }
        return res;
    }
}
