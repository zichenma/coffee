/**
169. Majority Element
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */

/**
 1. Build a hashtable
 2. Set the key to each array element and the value is one 
	if the element appears again increase the value by one
 3. Interate the hashtable find which element is the most one appears by:
    initial the key as the first element, the inital value is hashTable[key].
    for each key in hashTable, if the hashTable[k] larger than the initial value
	update the key to current k, and the value to current hashTable[k] 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	var  hashTable = {};
	for (var i = 0; i < nums.length; i++){
		if(!hashTable[nums[i]]){
			hashTable[nums[i]] = 1;
		}else{
			hashTable[nums[i]] +=1;
		}
	}
	var key = nums[0], value = hashTable[key];
	for(var k in hashTable){
		if(hashTable[k] > value){
			key = k;
			value = hashTable[k];
		}
	}
	return parseint(key);
};

console.log(majorityElement([3,3,3,2,3,4,5]));