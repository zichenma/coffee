// https://www.youtube.com/watch?v=Tuij96VBdu8
// see 103, 107
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
            LinkedList<List<Integer>> res = new LinkedList<List<Integer>>();
            if (root == null) return res;
            dfs(0, res, root);
            return res;
        }
    private void dfs(int level, LinkedList<List<Integer>> res, TreeNode node) {
        if (node == null) return;
        if (level >= res.size()) {
            res.add(new LinkedList<Integer>());
        }
            res.get(level).add(node.val);
            dfs(level + 1, res, node.left);
            dfs(level + 1, res, node.right);  
    }
}
// time O(n) space O(n)
class Solution2 {
    public List<List<Integer>> levelOrder(TreeNode root) {
        ArrayList res = new ArrayList();
        if (root == null) {return res;}

        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            ArrayList<Integer> level  = new ArrayList<Integer>();
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode head = queue.poll();
                level.add(head.val);
                if (head.left != null) {
                    queue.offer(head.left);
                }
                if (head.right != null) {
                    queue.offer(head.right);
                }
            }
            res.add(level);
        }
        return res;    
    }
}