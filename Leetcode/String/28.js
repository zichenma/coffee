/**
28. Implement strStr()
Implement strStr().

Returns the index of the first occurrence of needle 
in haystack, or -1 if needle is not part of haystack.

Subscribe to see which companies asked this question
 */

 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
 	var m = haystack.length, n = needle.length;
 	//Check the needle's lenght
 	if(n == 0){
 		return 0;
 	}
 	//Check if the haystack is larger than needle, if not return -1
 	if(m < n){
 		return -1;
 	}
 	//in a table the row (hang) is i
 	for(var i = 0; i < m - n + 1; i++){
 		// the colum (lie) is j
 		for(var j = 0; j < n; j++){
 			//console.log("i: " + i);
 			//console.log("j: " + j);
 			//console.log("i + j: " + (i+j));
 			//check if the haystack elements (i + j) is equal the needle elements
 			//see if the daignal elements are the same
 			if(haystack.charAt(i + j) != needle.charAt(j)){
 				//if not the loop break and check the second row element (i+1)
 				break;
 			}else{
 				//if yes the check the colom lements (j+1), if the j is equal to n -1
 				//all the needle elments are equal to haystack elemnts return i
 				if(j == n - 1){
 					return i;
 				}
 			}
 		}
 	}
 	return -1;
};




console.log("abcdefg".charAt(0));
console.log("bcd".charAt(0));


console.log(strStr("abcdefg","bcd"));