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


// 1. find the middle of the list
// 2. reverse the second half of list
// 3. compare the value 

var isPalindrome = function(head) {
    var middle = findMiddle(head);
    middle.next = reverseList(middle.next);
    var p = head, q = middle.next;
    while (p && q) {
        if (p.val !== q.val) {
            return false;
        }
        p = p.next;
        q = q.next;
    }
    return true;
};

// find the middle
function findMiddle (head) {
    var fast = head.next, slow = head;
    while (fast && fast.next) {
        fast = head.next.next;
        slow = head.next;
    }
    return slow;
}

// reverse the LinkedList
function reverseList (head) {
    var pre, curr = head, temp;
    while (curr) {
        temp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = tem;
    }
}





 function ListNode(val) {
	this.val = val;
 	this.next = null;
 }
 function build() {
 	var n = [new ListNode(0),new ListNode(1)];
 
 	for(var i = 0; i < n.length-1; i++){ 
 		n[i].next = n[i+1];
 	};
 	return n[0];
 }

console.log(isPalindrome(build()));

