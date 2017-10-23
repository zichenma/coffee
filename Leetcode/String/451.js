//1. build hash table store the frequency 
//2. carete array store the char and freq like: [a, 5];
//   using array to store the char and freq not hash table is because 
//   here need to know the freq to get the value, however, in hash table
//   it's not convient to sort value (must push it into array, whish will sparate from key)
//   Using value to find key, only will return the first key, e.g. {a : 1, b : 1}, if
//   using 1 to get key, only can get a, but not b
// 3.sort array 
// 4. make new str
var frequencySort = function(s) {
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] || 0;
        hash[s[i]]++;
    }
    var arr = [];
    for (var k in hash) {
        arr.push([k, hash[k]]);
    }

    arr.sort(function(a,b) {
        return b[1]-a[1];
    });
  
    var ans = "";
    for (i=0; i<arr.length; i++) {
        ans = ans + arr[i][0].repeat(arr[i][1]);
    }

    return ans;
};

console.log(frequencySort("Aabb"));


// find key by value: 
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}







