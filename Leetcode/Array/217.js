/**
217. Contains Duplicate
 */
 /**
Given an array of integers, find if the array 
contains any duplicates. Your function should return 
true if any value appears at least twice in the array, 
and it should return false if every element is distinct.

Subscribe to see which companies asked this question
 */
 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {},max = 1;
    if (nums === null) {
        return false;
    }
    for (var i = 0; i < nums.length; i++) {
        var val = nums[i];
        if (hash[val]) {
            return true;
        } else {
            hash[val] = true;
        }
    }
   return false;
};

var containsDuplicate1 = function(nums) {
    if (nums === null) {
        return false;
    }
    nums.sort(function(a,b){return a - b});
    for (var i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            return true;
        }
    }
    return false;
};

//no a good way
var containsDuplicate2 = function(nums) {
    if (nums === null) {
        return false;
    }
    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] !== nums[j]){
                console.log(nums[i] + '  ' + nums[j]);
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate2([4,3,2,1,1]));



