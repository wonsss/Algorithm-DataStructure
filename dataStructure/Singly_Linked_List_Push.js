class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('HELLO');
list.push('MARCO');
list.push('GOODBYE');

console.log(list);

/* 
SinglyLinkedList {
  head: Node { val: 'HELLO', next: Node { val: 'MARCO', next: [Node] } },
  tail: Node { val: 'GOODBYE', next: null },
  length: 3
}
 */
