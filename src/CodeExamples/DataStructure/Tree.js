const Tree = `class TreeNode {
    constructor(data = null) {
      this.data = data;
      this.children = [];
    }
    addChild(child = null) {
      //checks if child is an instance of TreeNode or not
      //so it checks if it's a node object
      //if it's a data like a primitive string 'a' then that data is pushed to children as an argument of a instantiation call
      this.children.push(child instanceof TreeNode ? child : new TreeNode(child));
    }
    removeChild(removedChild) {
      //as removeChild is a recursive function, length is used to compare
      //if the mutated this.children.length is the same as the original length
      //if it's the same then the child node to be removed is not stored in the current level
      //and we need to go a level deeper
      const length = this.children.length;
      this.children = this.children.filter(child =>
        removedChild instanceof TreeNode
          ? child !== removedChild
          : child.data !== removedChild
      );
      //base condition of the recursion, if updated this.children array is the still the same
      //we iterate over each child node stored in this.children
      //calling this.removeChild on it by passing the node to be removed from the tree (removedChild)
      if (length === this.children.length) {
        this.children.forEach(child => child.removeChild(removedChild));
        //this.children could look like [{data:1, chilndren: [{data:2, children: []}]}, {data:3, children: []}]
        //and calling removeChild on that child node like {data:1, children: [...]}
        //in that iteration that child node's children property gets tested again removeChild
        //that could look like {data:3, children: []}
        //so, it traverses ONE LEVEL DEEPER, and DEEPER until the child node is found
        //if not then the function just returns
      }
      return;
    }
  }`;

export default Tree;
