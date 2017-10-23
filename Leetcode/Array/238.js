// time: O(n) space: O(n)
// The idea is simply. 
// The product basically is calculated using the numbers before the current number and 
// the numbers after the current number. Thus, we can scan the array twice. 
// First, we calcuate the running product of the part before the current number. 
// Second, we calculate the running product of the part after the current number 
// through scanning from the end of the array.
var productExceptSelf = function(nums) {
    var len = nums.length;
    var res = [];
    if (len === 0) return len;
    var prefix = 1, sufix = 1;
    for (var i = 0; i < nums.length; i++) {3
        res[i] = prefix;
        prefix *= nums[i];s
    }
    console.log(res);
    for (var i = len - 1; i >=0; i--) {
        res[i] *= sufix;
        sufix *= nums[i];
    }
    return res;
};


console.log(productExceptSelf([2,3,4,5]));