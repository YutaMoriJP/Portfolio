import SinglyLinkedList from "./SinglyLinkedList";

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new SinglyLinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
  isEmpty() {
    return !this.size;
  }
  hasRoom() {
    return this.maxSize > this.size;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
  push(data) {
    if (this.hasRoom()) {
      this.stack.addToHead(data);
      this.size += 1;
    } else {
      return null;
    }
  }
  pop() {
    if (!this.isEmpty()) {
      const removedData = this.stack.removeHead();
      this.size -= 1;
      return removedData;
    } else {
      return null;
    }
  }
}

export default Stack;
