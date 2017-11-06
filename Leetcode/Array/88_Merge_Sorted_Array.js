/**
88. Merge Sorted Array
Given two sorted integer arrays nums1 and nums2, 
merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space 
(size that is greater or equal to m + n) to 
hold additional elements from nums2. 
The number of elements initialized in nums1 and nums2 
are m and n respectively.

Subscribe to see which companies asked this question
 */
 /**
1. a while loop making sure n and m larger than 0
2. compare the the num1's last element and the num2's last element
put the larger one at the end of num1[m+n-1]
3. if the num2 has more elements than num1, 
put the num2's all the element into the num1's head
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */



var merge = function(nums1, m, nums2, n) {
	while(m > 0 && n > 0){
		if(nums1[m-1] > nums2[n-1]){
			nums1[n+m-1] = nums1[m-1];
			m--;
		}else{
			nums1[n+m-1] = nums2[n-1];
			n--;
		}
	}
	while(n > 0){
		nums1[n-1] = nums2[n-1];
		n--;
	}
}

//nums1 = [2,5,6];
//m = 3;
//nums2 = [1,3,7,8,9]; 
//n=5;

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
console.log(merge(nums1, m, nums2, n));



