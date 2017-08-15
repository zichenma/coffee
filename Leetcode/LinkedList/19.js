
/*19. Remove Nth Node From End of List
Given a linked list, 
remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, 
   the linked list becomes 1->2->3->5.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /*
1.Find the length of Linkedlist
***!!!! Remember set different pointer in length loop and
remove while loop
2.Set the postion = length - n
3.remove the node
 */
var removeNthFromEnd = function(head, n) {
    var length = 0;
    var pointer = head;
    while(pointer) {
        length++;
        pointer = pointer.next;
    }
    var position = length - n;
    var current = head,
    previous,
    index = 0;
    if(position === 0){
        head = current.next;
    }else{
        while(index++ < position){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
    return head;
};