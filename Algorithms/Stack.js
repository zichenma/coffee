class Stack{
	constructor(){
		this.items = [];
	}
	push(element){
		this.items.push(element);
	}
	pop(){
		return this.items.pop();
	}
	peek(){
		return this.items[items.length - 1];
	}
	isEmpty(){
		return this.items.length == 0;
	}
	size(){
		return this.items.length;
	}
	clear(){
		return this.items = [];
	}
	print(){
		console.log(this.items.toString());
	}
	toString(){
		return this.items.toString();
	}

}

var stack = new Stack();
stack.push(1);
stack.push(2);

stack.print();