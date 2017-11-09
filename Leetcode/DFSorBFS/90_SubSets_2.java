// https://www.youtube.com/watch?v=rtFHxiQAICA&t=438s
// time: O(n2^n) space: O(n^2)
// idea: same as 78: dfs
// steps: see 78 : dfs template
public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums.length == 0 || nums == null) return res;
        Arrays.sort(nums);
        dfs(nums, res, 0, new ArrayList<Integer>());
        return res;
    }
    private void dfs(int[] nums, List<List<Integer>> res, int startIndex, List<Integer> curr) {
        res.add(new ArrayList<Integer>(curr));
        for (int i = startIndex; i < nums.length; i++) {
            // differentiate two same elements by index
            // when there are more than 2 elements (i > 0)
            // i is not as the same level as startIndex (i != startIndex): 
            //   make sure the previous element is selected already
            //   {1, 2}, {1, 2', 2''} make sure 2' is selected 
            // nums[i] == nums[i - 1] should be skiped
            if ( i > 0 && i != startIndex && nums[i] == nums[i - 1] ) {
                continue;
            } 
            curr.add(nums[i]);
            dfs(nums, res, i + 1, curr);
            curr.remove(curr.size() - 1);
        }
    }
}