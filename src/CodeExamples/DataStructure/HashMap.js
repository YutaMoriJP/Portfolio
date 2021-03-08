const HashMap = `class Node {
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
      const newhead = new Node(data);
      const currentHead = this.head;
      if (!currentHead) {
        this.head = newhead;
      } else {
        newhead.setNextNode(currentHead);
        this.head = newhead;
      }
    }
    removeHead() {
      const currentHead = this.head;
      if (!currentHead) {
        return;
      }
      const newHead = currentHead.getNextNode();
      this.head = newHead;
      return currentHead.data;
    }
  }
  
  class HashMap {
    constructor(length = 0) {
      this.hashMap = Array.from({ length }, () => new LinkedList());
    }
    hash(key) {
      return (
        [...key].reduce((a, c) => a + (a + c.charCodeAt()), 0) %
        this.hashMap.length
      );
    }
    assign(key, value) {
      const index = this.hash(key);
      const linkedList = this.hashMap[index];
      linkedList.addToHead({ key, value });
    }
    retrieve(key) {
      const index = this.hash(key);
      let current = this.hashMap[index].head;
      while (current) {
        if (current.data.key === key) {
          return current.data.value;
        }
        current = current.getNextNode();
      }
      return null;
    }
  }
  const bayernTeam = new HashMap(3);
  bayernTeam.assign("striker", "Lewy");
  bayernTeam.assign("winger", "Sane");
  bayernTeam.assign("keeper", "Neuer");
  bayernTeam.assign("fullback", "Kimmich");
  bayernTeam.assign("mid", "Goretzka");
  bayernTeam.assign("CB", "none");
  bayernTeam.assign("LW", "Coman");
  bayernTeam.retrieve("striker"); //Lewy`;

export default HashMap;
