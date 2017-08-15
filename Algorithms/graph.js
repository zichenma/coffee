class Dictionary{

	constructor (items) {
		this.items = {};
	}

	set (key, value) {
		this.items[key] = value;
	};

	has (key){
		return key in this.items;
	};
	
	get (key) {
		return this.has(key) ? this.items[key] : undefined;
	};
}

class Queue{
	constructor	()	{
		this.items = [];
	}

	dequeue () {
		return this.items.shift();
	}

	enqueue (val) {
		this.items.push(val);
	}

	isEmpty () {
		return this.items.length == 0;
	}
}

class Graph {

	constructor(){
		this.vertices = [];
		this.adjList = new Dictionary();
	}

	addVertex (val) {
		this.vertices.push(val);
		this.adjList.set(val, []);

	};

	addEdge (v, w) {
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	};

	toString () {
		let str = '';

		for (let i = 0; i < this.vertices.length; i ++) {
			str += this.vertices[i] + ' --> ';
			let neighbors = this.adjList.get(this.vertices[i]);
			for (let j = 0; j < neighbors.length; j++) {
				str += neighbors[j] + ' ';
			}
			str  += '\n';
		}
		return str;
	};

	//BFS: 

	initializeColor () {
		let color = [];
		for( let i = 0; i <= this.vertices.length; i++) {
			color[this.vertices[i]] = 'white';
		}
		return color;
	}

	bfs (v, callback) {
		let color = this.initializeColor(),
		queue = new Queue;
		queue.enqueue(v);

		while (!queue.isEmpty()) {
			let u = queue.dequeue(),
			neighbors = this.adjList.get(u),
			color[u] = 'grey';

			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[i];
				if (color[u] !== "white") {
					color[u] = "grey";
					queue.enqueue(w);
				}
			}
			color[u] = 'black';
			if (callback) {
				callback(u);
			}

		}
	}


}


var graph = new Graph();

var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; 
for (var i = 0; i < myVertices.length; i++) {
	graph.addVertex(myVertices[i]); 
}

graph.addEdge('A', 'B'); 
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

//console.log(graph.toString());

function printNode (value) {
	console.log('Visited vertex: ' + value);
}

graph.bfs(myVertices,printNode);