class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("not a node or null");
    }
  }
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error("not a node or null");
    }
  }
  getNextNode() {
    return this.next;
  }
  getPreviousNode() {
    return this.previous;
  }
}

export default Node;
