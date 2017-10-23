var reverseBetween = function(head, m, n) {
    if (head === null) return head;
    // define a dummy node
    var dummy = new ListNode(0),
    // initiate mNode, nNode at begining of list
    mNode = head,
    nNode = head;
    // point dummy node next at the begining of list
    dummy.next = head;
    // set a helper node before the M Node to record M Node value 
    preM = dummy;
    // loop M and N node to the correct position
    for (var i = 1; i < m; i++) {
        // set pre node to the M node
        preM = mNode;
        mNode = mNode.next;
    }
    for (var i = 1; i < n; i++) {
        nNode = nNode.next;
    }
    // when M node is not equal to N node, insert the M node after N node each time.
    while (mNode !== nNode) {
        // record the origin M node next
        preM.next = mNode.next;
        // put the M node point to N node, this means inster M node after N Node
        mNode.next = nNode.next;
        // N node points to M node
        nNode.next = mNode;
        // put back the origin M node 
        mNode = preM.next;
    }
    // get the whole list after shuffle
    return dummy.next;
};