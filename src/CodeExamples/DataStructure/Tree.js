const Tree = `class TreeNode {
    constructor(data = null) {
      this.data = data;
      this.children = [];
    }
    addChild(child = null) {
       this.children.push(child instanceof TreeNode ? child : new TreeNode(child));
    }
    removeChild(removedChild) {
      const length = this.children.length;
      this.children = this.children.filter(child =>
        removedChild instanceof TreeNode
          ? child !== removedChild
          : child.data !== removedChild
      );
      if (length === this.children.length) {
        this.children.forEach(child => child.removeChild(removedChild));
      }
      return;
    }
  }`;

export default Tree;
