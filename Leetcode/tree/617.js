//1: 2: 10/12
// Using recursion to slove tree problem
// Time: O(m + n) Space:
var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    var root = new TreeNode(t1.val + t2.val);
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    return root;
 };

// do not use create new node each time, use t1 as the new tree.
var mergeTrees1 = function(t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    var root = t1;
    root.val += t2.val;
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    return root;
 };