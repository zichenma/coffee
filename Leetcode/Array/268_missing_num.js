/**
268. Missing Number
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement 
it using only constant extra space complexity?
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */

 //假设a与b均为整数，则(a^b)^b=a.

//0^a=a.

 var missingNumber = function(nums) {
    var res = 0;
    
    // nums = [0, 1, 3, 4, 5]
    // index go from 1 to 5
    // res starts with 0
    // perform xor so that index and num will cancel out leaving the odd num alone
    for(var i = 1; i <= nums.length; i++) {
        res = res ^ i ^ nums[i - 1];
    }
 
    return res;
};


nums = [0,1,2,4];
console.log(missingNumber1(nums));





