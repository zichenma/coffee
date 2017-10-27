package amazon;
import java.util.*;

// https://www.youtube.com/watch?v=ZU-hZkGuEPM

// 1. using a HashMap to record the val and its index (list.size())
// 2. using a list to record each element
// 3. create a random number to get random val from list
// 4. when remove from element from the list, if it is not the last element, all other elements
// are needed to be shift one position
public class L_380 {
	class RandomizedSet {
		// Declare map, list, and random number
	    Map <Integer, Integer> map;
	    List <Integer> list;
	    Random rand;
	    
	    /** Initialize your data structure here. */
	    // Initialize the map, list, random
	    public RandomizedSet() {
	        map = new HashMap<Integer, Integer>();
	        list = new ArrayList<Integer>();
	        rand = new Random();
	    }
	    
	    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
	    public boolean insert(int val) {
	        if (map.containsKey(val)) return false;
	        // put the val as key, list.size() as value in the HashMap
	        map.put(val, list.size());
	        list.add(val);
	        return true;
	    }
	    
	    /** Removes a value from the set. Returns true if the set contained the specified element. */
	    public boolean remove(int val) {
	    	// if map doesn't has val return false (noting can be remove);
	        if (!map.containsKey(val)) return false;
	        // get the val index to check if it is the last element;
	        int index = map.get(val);
	        // index < list.size() - 1 means it's not last element
	        if (index < list.size() - 1) {
	        	// get the last element
	            int lastVal = list.get(list.size() - 1);
	            // shift the position in the list
	            list.set(index, lastVal);
	            // update the map
	            map.put(lastVal, index);
	        }
	        // remove element
	        map.remove(val);
	        list.remove(list.size() - 1);
	        return true;
	    }
	    
	    /** Get a random element from the set. */
	    public int getRandom() {
	    	// get random element
	         return list.get( rand.nextInt(list.size()));
	    }
	}

	/**
	 * Your RandomizedSet object will be instantiated and called as such:
	 * RandomizedSet obj = new RandomizedSet();
	 * boolean param_1 = obj.insert(val);
	 * boolean param_2 = obj.remove(val);
	 * int param_3 = obj.getRandom();
	 */
	class RandomizedSet1 {

	    /** Initialize your data structure here. */
	    Map <Integer,Integer> map;
	    List <Integer> list;
	    Random rand;
	    
	    public RandomizedSet1() {
	        map = new HashMap<Integer, Integer>();
	        list = new ArrayList<Integer>();
	        rand = new Random();
	    }
	    
	    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
	    public boolean insert(int val) {
	        if (map.containsKey(val)) return false;
	        map.put(val, list.size());
	        list.add(val);
	        return true;
	    }
	    
	    /** Removes a value from the set. Returns true if the set contained the specified element. */
	    public boolean remove(int val) {
	        if (!map.containsKey(val)) return false;
	        int index = map.remove(val);
	        int lastVal = list.remove(list.size() - 1);
	        if (index != list.size()) {
	            list.set(index, lastVal);
	            map.put(lastVal, index);
	        }
	        return true;
	    }
	    
	    /** Get a random element from the set. */
	    public int getRandom() {
	       return  list.get(rand.nextInt(list.size()));
	    }
	}

	/**
	 * Your RandomizedSet object will be instantiated and called as such:
	 * RandomizedSet obj = new RandomizedSet();
	 * boolean param_1 = obj.insert(val);
	 * boolean param_2 = obj.remove(val);
	 * int param_3 = obj.getRandom();
	 */

}
