/*
141. Linked List Cycle
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


 /*Method One:
1. build a set
2. check see if the set has node
3. if not put this node into set, if yes return false,
which means the node list has a circle
 */
var hasCycle = function(head) {
	 let set = new Set(),
	 current = head;
     while(current){
	 if(set.has(current)){
	 	return true;
	 }else{
	 	set.add(current);
	 	current = current.next;
	 }
	}
    return false;	 
};
 /*Method Two:
1. Set two pointers, fast and slow
2. Each time make fast move two steps and slow move one step
3. check if the fast can catch up the slow (fast == slow), if yes return true
else return false. 
 */
var hasCycle = function(head) {
	var fast = head, slow = head;
	if(head == null){
		return false;
	}
	while(fast.next && fast.next.next){
		fast = fast.next.next;
		slow = slow.next;
		if(fast == slow){
			return true;
		}
	}
	return false;
}

