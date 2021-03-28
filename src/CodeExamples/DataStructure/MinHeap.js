const MinHeap = `
const getParentIndex = index => Math.floor(index / 2);
const getLeftChildIndex = index => index * 2;
const getRightChildIndex = index => index * 2 + 1;

const getParentValue = (heap, index) => {
  const parentIndex = getParentIndex(index);
  return heap[parentIndex];
};

const getLeftChildValue = (heap, index) => {
  const leftChildIndex = getLeftChildIndex(index);
  return heap[leftChildIndex];
};

const getRightChildValue = (heap, index) => {
  const rightChildIndex = getRightChildIndex(index);
  return heap[rightChildIndex];
};
class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  add(value) {
    this.heap.push(value);
    this.size += 1;
    this.bubbleUp();
  }
  popMin() { 
    if (!this.size) {
      return;
    }
    let minIndex = 1;
    let currentIndex = this.size;
    this.swap(minIndex, currentIndex);
    const min = this.heap.pop();
    this.size -= 1; 
    this.bubbleDown();
    return min;
  }
  //heapify down
  bubbleDown() {
    let currentIndex = 1; 
   while (
      (this.size > 1 && this.heap[currentIndex] > left) ||
      this.heap[currentIndex] > right
    ) {
      let leftIndex = getLeftIndex(currentIndex);
      let rightIndex = getRightIndex(currentIndex);
      if (this.exists(leftIndex) && this.exists(rightIndex)) {
        if (left > right) {
          this.swap(currentIndex, rightIndex);
          currentIndex = rightIndex;
          right = getRight(this.heap, currentIndex);
        } else {
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
          left = getLeft(this.heap, currentIndex);
        }
      } else {
        this.swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
        left = getLeft(this.heap, currentIndex);
      }
    }
  }
  //heapify up
  bubbleUp() {
    while (
      currentIndex > 1 &&
      getParentValue(this.heap, currentIndex) > this.heap[currentIndex]
    ) {
      let parentIndex = getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
  `;

export default MinHeap;
