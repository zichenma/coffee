/*
21. Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be 
made by splicing together the nodes of the first two lists.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */var mergeTwoLists = function(l1, l2) {
	var current1 = l1, current2= l2, array1 = [], array2 = [], array3 = [],
	array4 =[];

	while(current1){
		array1.push(current1.val);
		current1 = current1.next;
	}
	while(current2){
		array2.push(current2.val);
		current2 = current2.next;
	}
	array3 = array1.concat(array2);
	array3.sort(function(a,b){return a - b});

	var head = new ListNode(0), tail = head;
	for(var i = 0; i < array3.length; i++){
		tail.next = new ListNode(array3[i]);
		tail = tail.next;
	}
	return head.next;
};

// method two;
// Compare two lists each value, if l1 first value small than l2 first value, put the smaller first, then 
// comapre with l1 second value with l2 first value, put the smaller one after first value 
// untill one list is empty and then put another one rest part after 
var mergeTwoLists = function(l1, l2) {
	// create a empty list
	var head = new ListNode(0), tail = head;
	while(l1 || l2){
		if(l2 === null || (l1 !== null && l1.val < l2.val)){
		    // put the smaller one at first 
			tail.next = l1;
			// move the l1 to next
			l1 = l1.next;
		}else{
			//vis versa
			tail.next= l2;
			l2 = l2.next;
		}
		// move the created list 
		tail = tail.next;
	}
	// return the new list
	return head.next;
};

var mergeTwoLists2 = function(l1, l2) {
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	if (l1.val < l2.val) {
		// be careful here l1.next should match l1.next, l2
		l1.next = mergeTwoLists2(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists2(l2.next, l1);
		return l2;
	}
};

