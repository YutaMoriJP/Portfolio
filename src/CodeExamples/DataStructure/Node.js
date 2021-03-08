const Node = `class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
    setNextNode(node) {
      if(!node instanceof Node) {
        throw new Error("not a Node instance")
      }
    }
    getNextNode() {
      return this.next;
    }
  }`;

export default Node;
