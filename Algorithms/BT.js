var BinarySearchTree = function (){

	var Node = function(key){
		this.left = null;
		this.right = null;
		this.key = key;
	}
	var root = null;

	this.insert = function(key){
		var newNode = new Node(key);

		if(root === null){
			root = newNode;	
		}else{
			insertNode(root, newNode);
		}

	};

	var insertNode = function(node, newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left, newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right, newNode);
			}
		}
	};

	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root, callback);
	}

	var inOrderTraverseNode = function(node,callback){
		if (node !== null){
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	};

	this.preOrderTraverse = function(callback) {
		preOrderTraverse(root, callback);
	}

	var preOrderTraverse = function (node, callback) {
		if(node !== null) {
			callback(node.key);
			preOrderTraverse(node.left, callback);
			preOrderTraverse(node.right, callback);
		}
	}

	this.postOrderTraverse = function(callback){
		postOrderTraverseNode(root, callback);
	};

	var postOrderTraverseNode = function(node, callback){
		if (node !== null){
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	};

	this.min = function(){
		return minNode(root);
	}
	
	var minNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
		}
		return node.key;
	};

	this.max = function(node){
		return maxNode(root);
	}

	var maxNode = function(node){
		if(node){
			while(node && node.right){
				node = node.right;
			}
		}
		return node.key;
	};

	this.search = function(key){
		return searchNode(root, key);
	}
	var searchNode = function(node, key){
		if(node === null){
			return false;
		}
		if(key < node.key){
			return searchNode(node.left, key);
		}else if(key > node.key){
			return searchNode(node.right, key);
		}else{
			return  true;
		}
	};

	this.remove = function(key){
		root = removeNode(root, key);
	};

	var removeNode = function(node,key){
		if(node === null){
			return null;
		}
		
		if(key < node.key){

			node.left = removeNode(node.left, key);
			return node;
		}else if (key > node.key){

			node.right = removeNode(node.right, key);
			return node;
		}else{

			//case 1 - a leaf node
			if (node.left === null && node.right === null){ //{9}
				node = null; //{10}
				return node; //{11}
			}
			//case 2 - a node with only 1 child
			if (node.left === null){ //{12}
				node = node.right; //{13}
				return node; //{14}
			} else if (node.right === null){ //{15}
				node = node.left; //{16}
				return node; //{17}
			}else{
				//case 3 - a node with 2 children
			
			var findMinNode = function(node) {
				if(node.left === null && node.right == null) {
				    return node;
				}
				if(node.left !== null) {
				    return node.left;
				}
				if(node.right !== null) {
				    return findMinNode(node.right);
				}
			}
			//Take remove 15 as an example: 
			//1. find the right sub tree of node 15
			var tempNode = findMinNode(node.right); //{18}
			//2. Replace the 15 to 18
			node.key = tempNode.key; //{19}
			//3. Remove the node 18
			node.right = removeNode(node.right, tempNode.key); //{20}
			}
			return node; //{21}
		}
	};

}


var tree = new BinarySearchTree();

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

var printNode = function(value){
		 console.log(value);
	}

tree.remove(20);
tree.inOrderTraverse(printNode);
