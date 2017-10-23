// Tree: usually use recursion and divide and conquer
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || p === null || q === null) return null;
    // when p and q are both at the left side
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
        // when p and q are both at the right side
    }else if (p.val > root.val && q.val > root.val) {
         return lowestCommonAncestor(root.right, p, q);
    } else {
        // when p equals q 
        return root;
    }  
};