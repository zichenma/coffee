/**
485. Max Consecutive Ones
Given a binary array, 
find the maximum number of consecutive 1s in this array.
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three 
digits are consecutive 1s.
The maximum number of consecutive 1s is 3.
Note:
The input array will only contain 0 and 1.
The length of input array is a positive 
integer and will not exceed 10,000
 */

 /**
 1. create two pointers, when element = 1, pointer++
    if element = 0, pointer = 0
 2. compare the pointer value and result value
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var pointer = 0, result = 0;
    for(var i = 0; i <nums.length; i++){
        if(nums[i] == 1){
    		pointer++;
            result = Math.max(pointer, result);
    	}else{
            pointer = 0;
        }	
    }
    return result;
};

var nums = [0,1,0,1,1,1,1,0,1];

console.log(findMaxConsecutiveOnes(nums));