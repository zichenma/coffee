class Node{
	constructor(key) {
		this.left = null;
		this.right = null;
		this.key = key;
	}
}

class BST{
	constructor() {
		this.root = null;
	}
	insertHelper(node, key) {
		if (node == null){
			return new Node(key);
		} else if (key < node.key) {
			node.left = this.insertHelper(node.left, key);
		} else {
			node.right = this.insertHelper(node.right, key);
		}
		return node;
	}

	insert(key) {
		this.root = this.insertHelper(this.root, key);
	}

	removeHelper(node, key){
		if (node === null){
			return null;
		}

		if (key < node.key) {
			node.left = this.removeHelper(node.left, key);
			return node;
		}else if (key > node.key) {
			node.right = this.removeHelper(node.right, key);
			return node;
		}else {
			if (node.left === null && node.right === null){
				node = null;
				return node;
			}
			if (node.left === null){
				node = node.right;
				return node;
			} else if(node.right === null) {
				node = node.left;
				return node;
			}

			let getMin = function(node){
				if (node.left === null && node.right === null) {
					return node;
				}
				if (node.left !== null){
					return getMin(node.left);
				}
				if (node.right !== null){
					return getMin(node.right);
				}
			};
			
			let tempNode = getMin(node.right);
			node.key = tempNode.key;
			node.right = removeHelper(node.right, tempNode.key);
			return node;
		}

	}
	remove(key) {
		this.root = this.removeHelper(this.root, key);
	}

	print() {
		this.printHelper(this.root);
	}
	printHelper(node) {
		if(node != null) {
			this.printHelper(node.left);
			console.log(node.key);
			this.printHelper(node.right);
		}
	}
}

let tree = new BST();
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.remove(5);
tree.print();