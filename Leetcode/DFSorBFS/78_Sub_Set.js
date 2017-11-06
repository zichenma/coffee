// See java
// Using DP to solve (helper function): 
// take num[i] or not take num[i]
// 1. when currIndex == nums.length means all the cases are token
// 2. if not take: subsetHelper()
// 3. if take: curr.add(nums[currIndex})
//    call helper again
// 4. remove the last element put into curr
  
var subsets = function(nums) {
    var array = [[]];
  
    combine([], nums.slice(0), array);
  
    return array;
  };
  
  function combine(arr, nums, array) {
    while (nums.length) {
      var data = nums[0];
      var arr_1 = arr.slice(0);
      arr_1.push(data);
      array.push(arr_1);
      nums.shift();
      combine(arr_1, nums.slice(0), array);
    }
  }