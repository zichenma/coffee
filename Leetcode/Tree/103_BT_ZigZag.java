// see 102, 107
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        dfs(root, res, 0);
        for(int i = 0; i < res.size(); i++) {
            if (i % 2 != 0) {
                Collections.reverse(res.get(i));
            }
        }
        return res; 
    }
    private void dfs (TreeNode root, List<List<Integer>> res, int level) {
        if (root == null) return;
        if (level >= res.size()) {
            res.add(new ArrayList<Integer>());
        }
        res.get(level).add(root.val);
        dfs(root.left, res, level + 1);
        dfs(root.right, res, level + 1);
    }
}