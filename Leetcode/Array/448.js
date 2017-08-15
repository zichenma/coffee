/**
448. Find All Numbers Disappeared in an Array
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive 
that do not appear in this array.

Could you do it without extra space and in O(n) runtime? 
You may assume the returned list does not count as extra space

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var n = nums.length, arr = [], set = new Set(), output =[];
    for(var i = 1; i <= n; i++){
        arr.push(i);
    }
    for(var i = 0; i < nums.length; i++){
        set.add(nums[i]);
    }
    for(var i = 0; i < arr.length; i++){
        if(!(set.has(arr[i]))){
            output.push(arr[i]);
        }
    }
    return output;
};

nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));
