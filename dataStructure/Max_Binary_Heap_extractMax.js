class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] <= this.values[parentIdx]) break;
      [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  oldSinkDown() {
    let idx = 0;
    const { length } = this.values;
    while (true) {
      const element = this.values[idx];
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
      idx = swap;
    }
  }

  sinkDown() {
    let idx = 0;
    const { length } = this.values;

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      const leftChild = leftChildIdx < length ? this.values[leftChildIdx] : null;
      const rightChild = rightChildIdx < length ? this.values[rightChildIdx] : null;
      let target; //
      let targetIdx;
      if (leftChild >= rightChild) {
        target = leftChild;
        targetIdx = leftChildIdx;
      } else {
        target = rightChild;
        targetIdx = rightChildIdx;
      }

      if (target <= this.values[idx]) {
        break;
      }

      [this.values[idx], this.values[targetIdx]] = [this.values[targetIdx], this.values[idx]];
      idx = targetIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log(heap);

heap.insert(55);

console.log(heap);

console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
