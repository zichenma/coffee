// https://www.youtube.com/watch?v=7KZWLM9QtRA&t=8s
// time: O(n) space: O(1)
// Idea: DFS, buid a hashmap to map nums and char, then use DFS (back tracking) to find
// each combination
// Steps:
// 1. Edge case
// 2. map nums and char
// 3. dfs
// 4. return res
// DFS: 1. map's value's length == digits'length:
        // push curr to res (find one answer)
//      2. !!! back tracking 3 steps: 
        // 1. push, dfs, pop

var letterCombinations = function (digits) {
    // edge case
    if (digits.length === 0) return [];
    // map nums and chars
    var map = {
        "1" : "",
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz",
        "0" : ""
    }, res = [];
    
    dfs(map, digits, 0, [], res);
    
    return res;
}
function dfs (map, digits, index, temp, res) {
    // if digtis.length == temp.length, get one answer and stop
    if (digits.length === temp.length) {
        res.push(temp.join(''));
        return; 
    }
    // back tracking three steps:
    for (var i = 0; i < map[digits[index]].length; i++) {
        //1. push
        temp.push(map[digits[index]].charAt(i));
        //2. dfs
        dfs(map, digits, index + 1, temp, res);
        //3. pop
        temp.pop();
    }
  
}