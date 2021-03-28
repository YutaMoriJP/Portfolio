const binarySearch = `
//Binary Search Function
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let rootIndex = Math.floor((left + right) / 2);
    let rootValue = arr[rootIndex];
    if (rootValue === target) return rootIndex;
    if (rootValue > target) right = rootIndex - 1;
    if (rootValue < target) left = rootIndex + 1;
  }
  return -1; //in search, if nothing is found, return -1
};

//recursive solution
const binarySearch = (arr, target) => {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let rootValue = arr[mid];
  if (!arr.length) return -1;
  if (arr.length === 1) return arr[0] === target ? 0 : -1;
  if (rootValue > target) return isPrime(left, target);
  return isPrime(right, target);
};

//Binary Tree Data Structure
class BinaryTree {
  constructor(data, depth = 1) {
    this.data = data;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (this.data > data) {
      if (this.left) return this.left.insert(data);
      this.left = new BinaryTree(data, this.depth + 1);
    } else {
      if (this.right) return this.right.insert(data);
      this.right = new BinaryTree(data, this.depth + 1);
    }
  }
  findRecursively(data) {
    if (data === this.data) return this;
    if (this.left && this.data > data) return this.left.findRecursively(data);
    if (this.right && this.data < data) return this.right.findRecursively(data);
    return null;
  }
}
`;

export default binarySearch;
