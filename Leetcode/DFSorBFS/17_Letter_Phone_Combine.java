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

public class Solution {
    // map nums and chars
    private char[][] table = {
                              {}, {}, {'a','b','c'}, 
                              {'d','e','f'}, {'g','h','i'},
                              {'j','k','l'},{'m','n','o'},
                              {'p','q','r','s'},{'t','u','v'},
                              {'w','x','y','z'}
                              };
    public List<String> letterCombinations(String digits) {
        List<String> res = new LinkedList<>();
        // edge case
        if (digits.length() == 0) return res;

        dfs(digits, res, new StringBuilder(""));

        return res;
    }
    
    private void dfs(String digits, List<String> res, StringBuilder tmpres) {
        
        int len = tmpres.length();
         // if digtis.length == temp.length, get one answer and stop
        if (len == digits.length()) {
            res.add(tmpres.toString());
            return;
        } 
        int nextDigit = digits.charAt(len) -'0';
        // back tracking three steps:
        for(char next : table[nextDigit]) {
            // push
            tmpres.append(next);
            // dfs
            dfs(digits, res, tmpres);
            // pop
            tmpres.delete(len, len+1);
        }
    }
}