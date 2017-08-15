/**
219. Contains Duplicate II
Given an array of integers and an integer k, 
find out whether there are two distinct 
indices i and j in the array such that 
nums[i] = nums[j] and the absolute difference 
between i and j is at most k.

Subscribe to see which companies asked this question
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k <= 0){
        return false;
    }
    if(nums === null || nums.length === 0){
        return false;
    }
    var hash = {};
    for(var i = 0; i < nums.length; i++){
        var val = nums[i];
        if(hash[val] !== undefined){
        	//hash[val] is the key of hashmap,why i - hash[val]?
        	console.log(hash[val]);
            if((i - hash[val]) <= k){
                return true;
            } else {
                hash[val] = i;
            }
        } else {
            hash[val] = i;
        }   
    }
    return false;
};





var arr = [1,8,6,8,7,9,9,8,9];



containsNearbyDuplicate(arr,4);