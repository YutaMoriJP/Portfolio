import Node from "./Node";

class SinglyLinkedList {
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
    return "yep";
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
    const removedHead = this.head;
    const newHead = removedHead.getNextNode();
    if (!removedHead) {
      return;
    }
    this.head = newHead;
    return removedHead.data;
  }
}

export default SinglyLinkedList;
