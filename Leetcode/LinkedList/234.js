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
var isPalindrome = function(head) {
	var fast = head, slow = head;
	while(fast && fast.next){
		fast = fast.next.next;
		slow = slow.next;
	}
	slow = reverseList(slow);
	fast = head;
	while(slow){
		if(fast.val !== slow.val){
			return false;
		}
		fast = fast.next;
		slow = slow.next;
	}
	return true;
};


var reverseList = function(head) {
    var previous, current = head, temp;
        while(current){
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        return previous;
};


console.log(reverseList(build()));




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

