const SinglyLinkedList = `class Node {
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
  //SinglyeLinkedList is directional, so it only points at next node
  //a -> b -> c
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      if (currentHead) {
        //if currentHead is NOT null, then set newHead's next property point at currentHead
        newHead.setNextNode(currentHead);
      }
      this.head = newHead;
    }
    addToTail(data) {
      const newTail = new Node(data);
      //SinglyLinkedList does NOT have a tail property
      let tail = this.head;
      //if this.head is null then set this.head to newTail
      if (!tail) {
        this.head = newTail;
      } else {
        while (tail.getNextNode() !== null) {
          //make sure that we're checking that tail.getNextNode() being null
          //is what terminates the while loop, or else tail will be null in the end
          tail = tail.getNextNode();
        }
        tail.setNextNode(newTail);
      }
    }
    removeHead() {
      const currentHead = this.head;
      if (!currentHead) {
        return;
      }
      const newHead = currentHead.getNextNode();
      this.head = newHead;
    }
  }
  `;

export default SinglyLinkedList;
