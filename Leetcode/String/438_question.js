var findAnagrams = function(s, p) {
    if (s.length === 0 || p.length === 0 ) return [];
    var pArr = p.split(''), sortedP, sortedS, res = [];
    sortedP = pArr.sort();
    for (var i = 0; i < s.length; i++) {
          var patten = s.substring(i, p.length + i);
          sortedS = patten.split('').sort();
          if (sortedS.toString() === sortedP.toString()) {
              res.push(i);
          }
    }
    return res;
};


var findAnagrams1 = function(s, p) {
    var hash = {} , res = [];
    if (s == null || s.length == 0 || p == null || p.length == 0) return res;
    for (var i = 0; i < p.length; i++) {
        var key = s.charAt(i);
        if (!hash[key]) {
            hash[key] = 1;
        } else {
            hash[key] += 1;
        }
    }

    var left = 0, right = 0, count = p.length;
    while (right <= s.length) {
        if (hash[s.charAt(right)] >= 1) {
            count--;
        }
        hash[s.charAt(right)]--;
        right++;
        if (count == 0) {
            res.push(left);
        }
        if (right - left == p.length ) {
            
             if (hash[s.charAt(left)] >= 0) {
                 count++;
             }
             hash[s.charAt(left)]++;
                 left++;
         
         }
    }
    return res;
 };

console.log(findAnagrams1("cbaebabacd","abc"));