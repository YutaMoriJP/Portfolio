const DoublyLinkedList = `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    }
  }
  setPreviousNode(node) {
    if (node instanceof Node) {
      this.previous = node;
    }
  }
  getNextNode() {
    return this.next;
  }
  getPreviousNode() {
    return this.previous;
  }
}

//DoublyLinkedList is bidirectional so it points at next and previous node
//a <-> b <-> c
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    //check if head is null or not then previous stays as is
    if (!currentHead) {
      this.head = newHead;
    } else {
      //set new head's next to previous
      //set previous head's previous node to new head
      newHead.setNextNode(currentHead);
      currentHead.setPreviousNode(newHead);
    }
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (!currentTail) {
      this.tail = newTail;
    } else {
      //set newTail's previous to currentTail
      //set currentTail's next to newTail
      newTail.setPreviousNode(currentTail);
      currentTail.setNextNode(newTail);
      this.tail = newTail;
    }
    if (!this.head) {
      this.head = newTail;
    }
  }
  removeHead() {
    const removedHead = this.head;
    //if current head is null then just return
    if (!removedHead) {
      return;
    }
    //create new head which this.head.getNextNode()
    //then set that new head's previous node to null IF that next node is NOT null
    const newHead = removedHead.getNextNode();
    this.head = newHead;
    //check if new head is NOT null
    if (newHead) {
      newHead.setPreviousNode(null);
    }
    //if previous head and tail are the same, then it means there is only one node
    //so removing the head node then we must remove the tail
    //compare removedHead to this.tail
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }
  removeTail() {
    const removedTail = this.tail;
    //if current tail is null, then just return
    if (!removedTail) {
      return;
    }
    //get previous node by calling currentTai.getPreviousNode()
    //then set that to null
    const newTail = removedTail.getPreviousNode();
    this.tail = newTail;
    if (newTail) {
      newTail.setNextNode(null);
    }
    //like with removedHead, if removedTail is the same as this.head
    //then there is only one node and when removing tail/head then the other must be removed as well
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return "No matching data found!";
    }
    //if node to remove is head, then just call removeHead
    if (nodeToRemove === this.head) {
      this.removeHead();
    }
    //if node to remove is tail, then just call removeTail
    else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const previousNode = nodeToRemove.getPreviousNode();
      const nextNode = nodeToRemove.getNextNode();
      //previousNode's next node is the node that will be removed
      //like b has to be removed in
      //a <-> b <-> c
      //a is previousNode
      //c is nextNode
      //to remove b, we make a's nextNode c
      //and c's previus node is now a and not b
      previousNode.setNextNode(nextNode);
      nextNode.setPreviousNode(previousNode);
    }
  }
}`;

export default DoublyLinkedList;
