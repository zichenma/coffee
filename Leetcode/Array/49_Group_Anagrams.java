// https://www.youtube.com/watch?v=BgibAOHgioY

// time: O(n)

// Idea: 1. Check each element see if it's a anagram by sorting them see if they
// are identical.
// 2. If they are identical (anangram), if HashMap does not have the sorted element 
// put the sorted element into HashTable as key, and create new array list as value 
// 3. If HashMap has this storted element, add origial element (unsorted) into map
// 4. return the map.values();

// Steps:
// 1. create map
// 2. is Anagram by sort
// 3. if not, {sortedEle : list}
// 4. if yes, map.add(strs[i])
// 5. return list[map.values()]



class Solution {
  public List<List<String>> groupAnagrams (String[] strs) {
    ArrayList<List<String>> results = new ArrayList<List<String>>();
    if (strs == null || strs.length == 0) return results;
    HashMap<String, List<String>> map = new HashMap<String, List<String>>();
    for (int i = 0; i < strs.length; i++) {
        char[] curr = strs[i].toCharArray();
        // !!! Be careful Arrays not Array
        Arrays.sort(curr);
        // convert array to string
        String key = String.valueOf(curr);
        if (!map.containsKey(key)){
            map.put(key, new ArrayList<String>());
        }
        map.get(key).add(strs[i]);
    }
    return new ArrayList<List<String>>(map.values());
}
}