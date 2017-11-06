//F: S:10/13
//time: O(n) space: O(n)
// 1. corner case
// 2. change string to arry (only arry canbe sorted!!!)
// 3. sort each of them
// 4. compare each element in both array, if it's not identical return false
// there is not upper bound for this for loop, cannot convert to while loop
// because needs the counter i
// else return true 

var isAnagram = function (s, t) {
    if (s.length !== t.length || s == null || t == null) return false;
    var outputS = s.split('').sort();
    var outputT = t.split('').sort();
    // check if two array are identical
    for (var i = outputS.length; i--;) {
        if (outputS[i] !== outputT[i]) return false;
    }
    return true;
};

console.log(isAnagram1('a','b'));

//Bad solution: 
var isAnagram1 = function (s, t) {
    var set = new Set();
    if (s.length !== t.length) return false;
    for(var i = 0; i < s.length; i++) {
        set.add(s.charAt(i));
    }
   
    for (var i = 0; i < t.length; i++) {
       if (set.has(t.charAt(i)) == false) return false;
       for (var key of set) {
            if(freq(s, key) !== freq(t, key)) {
                return false;
            }
       }
    }
    return true;
};
// this function is to check a character appears in a string
function freq (str, char) {
    var count = 0;
    var pos = str.indexOf(char);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(char, pos + 1);
    }
    return count;
}

//console.log(isAnagram('anagram','nagaram'));



