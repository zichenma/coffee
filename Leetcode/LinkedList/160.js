/**
160. Intersection of Two Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins.
For example, the following two linked lists:
A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
     var currentA = headA, currentB = headB, set = new Set();
     while(currentA){
     	set.add(currentA);
     	currentA = currentA.next;
     }
     while(currentB){
     	if(set.has(currentB)){
     		break;
     	}
     	currentB = currentB.next;
     }    
     return currentB;
};
//Method two:
var getIntersectionNode = function(headA, headB) {
    var lenA = getLen(headA), lenB = getLen(headB);
    while(lenA > lenB){
        headA = headA.next;
        lenA--;
    }
    while(lenA < lenB){
        headB = headB.next;
        lenB--;
    }
    while(headA != headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;

}


function getLen(node){
    var len = 0;
    while(node != null){
        node = node.next;
        len++;
    }
    return len;
}