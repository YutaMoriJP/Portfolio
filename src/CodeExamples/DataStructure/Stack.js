const Stack = `class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      }
    }
    getNextNode() {
      return this.next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      if (!currentHead) {
        this.head = newHead;
      } else {
        newHead.setNextNode(currentHead);
        this.head = newHead;
      }
    }
    addToTail(data) {
      const newTail = new Node(data);
      let currentNode = this.head;
      if (!currentNode) {
        this.head = newTail;
      } else {
        while (currentNode.getNextNode() !== null) {
          currentNode = currentNode.getNextNode();
        }
        currentNode.setNextNode(newTail);
      }
    }
    removeHead() {
      const currentHead = this.head;
      const newHead = currentHead.getNextNode();
      if (!currentHead) {
        return;
      }
      this.head = newHead;
      return currentHead.data;
    }
  }
  
  class Stack {
    constructor(maxSize = Infinity) {
      this.stack = new LinkedList();
      this.size = 0;
      this.maxSize = maxSize;
    }
    hasRoom() {
      return this.maxSize > this.size;
    }
    isEmpty() {
      return !this.size;
    }
    peek() {
      const { head } = this.stack; // {head: null}
      return head?.data || null;
    }
    push(data) {
      if (this.hasRoom()) {
        this.stack.addToHead(data);
        this.size += 1;
      } else {
        throw new Error("Stack is full. Stack Overflow!");
      }
    }
    pop() {
      if (!this.isEmpty()) {
        const removedData = this.stack.removeHead();
        this.size -= 1;
        return removedData;
      }
    }
  }
  `;

export default Stack;
