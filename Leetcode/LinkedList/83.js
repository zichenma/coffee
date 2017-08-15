/**
83. Remove Duplicates from Sorted List
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var current = head, array = [];
    while(current){
    	array.push(current.val);
    	current = current.next;
    }
    var hashTable = {}, data = [];
    for(var i = 0; i < array.length; i++){
    	if(!hashTable[array[i]]){
    		hashTable[array[i]] = true;
    		data.push(array[i]);
    	}
    }
    return data;
};

//Method 2
var deleteDuplicates = function(head) {
    var current = head, items = {};
    while(current){
    	items[current.val] = current.val;
    	current = current.next;
    }

    var head = new ListNode(0), tail = head, sortedArray;
    sortedArray = Object.keys(items).sort(function(a,b){return a-b});
	for(var i = 0; i < sortedArray.length; i++){
		tail.next = new ListNode(Number(sortedArray[i]));
		tail = tail.next;
	}
	return head.next;
};

var deleteDuplicates = function(head) {
    if(head === null){
        return head;
    }
    var tail = head, current = head.next;
    while(current){
        if(tail.val == current.val){
            current = current.next;
        }else{
            tail.next = current;
            tail = tail.next;
            current = current.next;
        }
    }
    tail.next = null;
    return head;
};

var deleteDuplicates = function(head){
    var current = head;
   
    while(current && current.next){
        if(head.next === null){
            return head;
        }
        if(current.val == current.next.val){
            current.next = current.next.next;
        }else{
            current = current.next;
        }

    }
    return head;
};