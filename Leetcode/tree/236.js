// dvide and concur
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return root;
    // if find the p or q return root;
    if (root === p || root === q) {
        return root;
    }
    //divde into left and right, go to right/left to find lowest common ancestor
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    // if p, q is not at left, return right
    if (left === null) {
        return right;
    // if p, q is not at right, return left
    } else if (right === null) {
        return left;
    } else {
    // if find one of them, return root
        return root;
    }
};