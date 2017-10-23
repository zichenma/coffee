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
//time: O(n) space: O(1)
var reverseList = function(head) {
    if (head === null) return head;
    var pre = null, current = head, temp;

    while (current) {
        // Image travel to the end of list 
        // record current.next value (null)
        temp = current.next;
        // point the current next to previous node
        current.next = pre;
        // change the posion between previous node and current node
        pre = current;
        // put back the current node value
        current = temp;
    }
    return pre;
};