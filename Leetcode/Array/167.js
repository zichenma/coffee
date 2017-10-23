// time: O(n) space: O(n)
// 1. hash table
// 2. define key as numbers[i], value as i
// 3. check if target - key in the hash table, return the index + 1
// 4. if not in the table put hash[key] = i into the table

// * remember it should check if hash[target - key] in the table, then create the table
// otherwise use method 2, be careful, the else
var twoSum = function(numbers, target) {
    var hash = {};
    for (var i = 0; i < numbers.length; i++) {
        var key = numbers[i];
        // if hash[target - key] is not in the hash table
        if (hash[target - key] !== undefined) {
            return [hash[target - key] + 1, i + 1]
        } else {
            // create key: numbers[i], value: the index i
            hash[key] = i;
        }
    }
    return [];
};

// 10/12 review:
var twoSum1 = function(numbers, target) {
    var hash = {}, res;
    if (numbers.length === 0 || target === null) return [];
    for (var i = 0; i < numbers.length; i++) {
            var key = numbers[i];
            if (!hash[target - key]) {
                hash[key] = i + 1;
            } 
            // !!no else
            if (hash[target - key]) {
                console.log(hash[target - key]);
                res = [hash[target - key], i + 1];   
            }
    }
    return res;
 };

 console.log(twoSum([0,0,3,4], 0));