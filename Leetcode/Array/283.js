/**
283. Move Zeroes
Given an array nums, write a function to move all 0's 
to the end of it while maintaining the relative 
order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], 
after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	if(nums == null || nums.length == 0) return;
	var insertPos = 0;
	for(var i = 0; i < nums.length; i++){

		if(nums[i] != 0){
			nums[insertPos++] = nums[i];
		}
	}
	while(insertPos < nums.length){
		nums[insertPos++] = 0;
	}
};

var nums = [0,1,0,3,12];
console.log(moveZeroes(nums));

var moveZeroes = function(nums) {
	var zeros = [], nonZero = [];
	for(var i = 0, len = nums.length; i < len; i++){
			if(nums[i] == 0){
				zeros.push(nums[i]);
			}
			if(nums[i] !== 0){
				nonZero.push(nums[i]);
			}
	}
	var nums1 = nonZero.concat(zeros);
	for(var i = 0; i < nums1.length; i++){
		nums[i] = nums1[i];
	}
};


