/**
414. Third Maximum Number
Given a non-empty array of integers, return the third maximum number in this array. 
If it does not exist, return the maximum number. 
The time complexity must be in O(n).


Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.


Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, 
so the maximum (2) is returned instead.


Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the 
third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	var hashTable = {}, data = [];
	if(nums.length == 1){
		return nums[0];
	}else if(nums.length < 3){
		return Math.max(nums[0],nums[1]);
	}else{
		nums.sort(function(a,b){return a - b});
		for(var i = 0; i < nums.length; i++){
			if(!hashTable[nums[i]]){
				hashTable[nums[i]] = true;
				data.push(nums[i]);
			}
		}
		if(data.length == 1){
			return data[0];
		}else if(data.length < 3){
			return Math.max(data[0],data[1]);
		}else{
			return data[data.length - 3];
		}
	}
};


console.log(thirdMax([1,1,1,1,1,1]));
