import _ from 'lodash';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count;
    let current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    next = null;
    node = this.head;
    for (let i = 0; i < this.length; i++) {
      prev = node.prev;
      node.prev = next;
      next = node;
      node = prev;
    }
  }
}

const list = new DoublyLinkedList();
list.push(5).push(10).push(15).push(20);
console.log(list);
/* 
DoublyLinkedList {
  head: <ref *1> Node {
    val: 5,
    next: Node { val: 10, next: [Node], prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    val: 20,
    next: null,
    prev: Node { val: 15, next: [Circular *2], prev: [Node] }
  },
  length: 4
}
 */
list.reverse();
console.log(list.length); // 4
console.log(list.head.val); // 20
console.log(list.head.next.val); // 15
console.log(list.head.next.next.val); // 10
console.log(list.head.next.next.next.val); // 5
console.log(list);

/* 
DoublyLinkedList {
  head: <ref *1> Node {
    val: 20,
    next: Node { val: 15, next: [Node], prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    val: 5,
    next: null,
    prev: Node { val: 10, next: [Circular *2], prev: [Node] }
  },
  length: 4
} 
*/
