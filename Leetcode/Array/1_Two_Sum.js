/**
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.
Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */


var twoSum = function(nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if(hash[target-num] !== undefined) {
            return [hash[target-num], i];
        } else {
            hash[num] = i;
        }
    }
    return [];
};

console.log(twoSum([3,2,4],7));



