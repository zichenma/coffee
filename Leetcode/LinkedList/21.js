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

//method two;
var mergeTwoLists = function(l1, l2) {
	var current1 = l1, current2 = l2, head = new ListNode(0), tail = head;
	while(current1 || current2){
		if(current2 === null || (current1 !== null && current1.val < current2.val)){
			tail.next = current1;
			current1 = current1.next;
		}else{
			tail.next= current2;
			current2 = current2.next;
		}
		tail = tail.next;
	}
	return head.next;
};
