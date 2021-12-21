/* eslint-disable guard-for-in */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    // this.values.forEach(value => {
    //   if (value.val === vald) {
    //     value.priority = priority;
    //   }
    // });
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    nodes.enqueue(start, 0);
    const distances = {};
    const previous = {};
    const path = []; // to return at end
    let smallest;
    // build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        // nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        // nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (true) {
      console.log(nodes);
      smallest = nodes.dequeue().val;
      console.log("smallest", smallest);
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }
      //   if (smallest || distances[smallest] !== Infinity) {
      else {
        for (const neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]
