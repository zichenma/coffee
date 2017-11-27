/**
442. Find All Duplicates in an Array
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
 */


/**
1. Build a hashtable 
2. set the key as each array element, 
    value as 1, if the element appears twices,
    the value increase 1
3. return the all the values bigger than 1
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var hashTable = {}, data = [];
    for(var i = 0; i < nums.length; i++){
        if(!hashTable[nums[i]]){
            hashTable[nums[i]] = 1;
        }else{
            hashTable[nums[i]] += 1;
        }
        if(hashTable[nums[i]] > 1){
            data.push(nums[i]);
        }
    }
    return data;
};


console.log(findDuplicates([4,3,2,7,8,2,3,1]));