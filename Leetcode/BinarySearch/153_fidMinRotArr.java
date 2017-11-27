// see http://www.lintcode.com/en/problem/find-minimum-in-rotated-sorted-array/
// youtube: https://www.youtube.com/watch?v=P4r7mF1Jd50

class Solution {
    public int findMin(int[] nums) {
    
        if (nums == null || nums.length == 0) {
            return -1;
        }
        
        int start = 0, end = nums.length - 1;
        int target = nums[nums.length - 1];
        
        while (start + 1 < end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                end = mid;
            } else if (nums[mid] > target) {
                start = mid;
            } else {
                end = mid;
            }
        }
        
        if (nums[start] <= target) {
            return nums[start];
        } else {
            return nums[end];
            
        }
        
    }
}