// See java
// Using DP to solve (helper function): 
// take num[i] or not take num[i]
// 1. when currIndex == nums.length means all the cases are token
// 2. if not take: subsetHelper()
// 3. if take: curr.add(nums[currIndex})
//    call helper again
// 4. remove the last element put into curr

class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums.length == 0 || nums == null) return res;
        dfs(res, nums, 0, new ArrayList<Integer>());
        return res;
    }
    
    private void dfs (List<List<Integer>> res, int[] nums, int startIndex, List<Integer> ans) {
        // 1. record current element
        res.add(new ArrayList<Integer>(ans));
        // back tracking three steps:
        for (int i = startIndex; i < nums.length; i++) {
            // 1.push
            ans.add(nums[i]);
            // 2.dfs
            dfs(res, nums, i + 1, ans);
            // 3.pop
            ans.remove(ans.size() - 1); 
        }
    } 
}