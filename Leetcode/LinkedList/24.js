/**
 24. Swap Nodes in Pairs
 */
/**
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

Subscribe to see which companies asked this question
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */





var swapPairs = function(head) {
  	if(head === null){
  		return null;
  	}else if(head.next === null){
  		return head;
  	}else{
  		var previous = head,
  			current = head.next;
  		current.next = previous;
  		previous.next = swapPairs(head.next.next);
  	}
  	return current;
};