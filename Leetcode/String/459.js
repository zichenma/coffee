/**
459. Repeated Substring Pattern
Given a non-empty string check if it can be 
constructed by taking a substring of it and 
appending multiple copies of the substring together. 
You may assume the given string consists of lowercase 
English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"

Output: False


Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. 
(And the substring "abcabc" twice.)
 */

/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
	var len = str.length;
	for(var i = Math.floor(len/2); i >=1; i--){
		if(len % i == 0){
			var m = len / i;
			var subS = str.substring(0,i);
			
			var sb = '';
			for(var j = 0; j < m; j++){
				sb = sb + subS;
			}
	
			if(sb === str){
		
	
				return true;
			}
		}
	}
	return false;
};

console.log(repeatedSubstringPattern("abcdabcd"));




