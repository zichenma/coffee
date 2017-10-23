// time: O(n) Space: O(n)
var firstUniqChar = function(s) {
    // loop through the string array
    for (var i = 0; i < s.length; i++) {
        // make sure there is not reapted character:
        // indexOf only find the index of first time appear character
        // if a character appears second time, its index would not equal to counter i
        // meanwhile make sure after this character there is not the same character:
        // s.indexOf(s.charAt(i), i+1) == -1
        // indexOf(, fromIndex)
        if (s.indexOf(s.charAt(i)) == i && s.indexOf(s.charAt(i), i+1) == -1) {
        // if find the first non repeated character return its index;
            return i;
        }
    }
    // if not find, return -1;
    return -1;
 };

 console.log(firstUniqChar("loveleetcode"));


 var firstUniqChar2 = function(s) {
    for (var i = 0; i < s.length; i++) {
        // if a charactar is NOT repeated, its indexOf() should equal lastIndexOf()
        if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) return i;
    }
    return -1;
 };