public class Solution {
    public int strStr(String haystack, String needle) {
        int start = 0, hLen = haystack.length(), nLen = needle.length();
        if (needle.equals(haystack)) return 0;
        if (hLen == 0 || hLen == nLen && !haystack.equals(needle) || haystack == null || needle == null) return -1;
        while (start <= hLen - nLen) {
            if (haystack.substring(start, nLen + start).equals(needle)) {
                return start;
            }
            start++;
        }
        return -1;
    }
}


class Solution2 {
    public final int BASE = 1000000;
    
    public int strStr(String haystack, String needle) {
        if (haystack == null && needle == null) {
            return -1;
        }
        
        int nLen = needle.length();
        if (nLen == 0) {
            return 0;
        }
        
        int power = 1;
        for (int i = 0; i < nLen; i++) {
            power = (power * 31) % BASE;
        }
        
        int needleCode = 0;
        for (int i = 0; i < nLen; i++) {
            needleCode = (needleCode * 31 + needle.charAt(i)) % BASE;
        }
        
        int hashCode = 0;
        for (int i = 0; i < haystack.length(); i++) {
            hashCode = (hashCode * 31 + haystack.charAt(i)) % BASE;    
            if (i < nLen - 1) {
                continue;
            }
            
            if (i >= nLen) {
                hashCode = hashCode - (haystack.charAt(i - nLen) * power) % BASE;
            }
            
            if (hashCode < 0) {
                hashCode += BASE;
            }
            
            if (hashCode == needleCode) {
                if (haystack.substring(i - nLen + 1, i + 1).equals(needle)) {
                    return i - nLen + 1;
                }
            }
        }
        return -1;
    }
}