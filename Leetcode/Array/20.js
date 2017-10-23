// build a hash table to check each char if in or not in the hash table
var isValid = function(s) {
    // if string's length is odd return false
    if(s.length % 2 !== 0) return false;
    // build hash table and a stack
    var hash = {'(' : ')',
                '[' : ']',
                '{' : '}'}, stack = [];

    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        // if c in hash table push c ( if c is the key of hash table, push c)
        // the correct left side is pushed into stack
        if (c in hash) {
            stack.push(c);
        } else {
            // check the right side
            // if there is no left side or the right side 
            // char is not equal to the left side
            // (not in the hash table) return false
            if (stack.length === 0 || hash[stack.pop()] !== c) {
                // if stack.length = 0, which means there is no valid left side
               // hash[stack.pop()] is valid right side 
               // if valid right side does not match c (uncheck right side) return false
                    return false;
            }
        }
    }
    // if the stack has any element return false, else return true;
    return stack.length == 0;
          
};

console.log(isValid('{}[[)()'));
