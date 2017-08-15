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
var reverseList = function(head) {
    var previous, current = head, temp;
    if(current){
        while(current){
            temp = current.next;
            current.next = previous;
        
            previous = current;
            current = temp;
        }
        return previous;
    }else{
        return [];
    }
};