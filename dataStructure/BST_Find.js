class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false; // 빈 트리일 때
    let current = this.root; // 순회할 때 현재 노드, root부터 탐색 시작하기 위해 초기값으로 설정
    while (current) {
      // 더 이상 내려갈 노드가 없을 때까지 순회
      if (value === current.value) return current; // 찾는 값이 현재 노드의 값과 같으면
      if (value < current.value) {
        // 찾는 값이 현재 노드의 값보다 작으면
        current = current.left; // 왼쪽 자식으로 더 내려간다.
      } else if (value > current.value) {
        // 찾는 값이 현재 노드의 값보다 크면
        current = current.right; // 오른쪽 자식으로 더 내려간다.
      }
    }
    return undefined; // 값이 없음을 반환
  }
}

//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(16);
tree.insert(7);
tree.insert(7);
tree.insert(7);
console.log(tree.find(11));
console.log(tree.findDony(16));
