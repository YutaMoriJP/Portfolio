import recursion from "./Algorithm/recursion";
import bubbleSort from "./Algorithm/bubbleSort";
import mergeSort from "./Algorithm/mergeSort";
import quickSort from "./Algorithm/quickSort";
import binarySearch from "./Algorithm/binarySearch";

const algorithm = [
  {
    name: "recursion",
    recursion,
    explanation:
      "RECURSION is an algorithm where a function calls itself in the body of the function. Like an iteration, recursion has a condition that stops the recursion, which is called the BASE CASE, like a loop stops when a condition is met. If the BASE CASE like arg.length === 0 is not true, then it moves to the RECURSIVE CASE, which is the part where the function calls itself. Depending on the function, it can be more efficient than a loop, but not always.",
  },
  {
    name: "bubbleSort",
    bubbleSort,
    explanation:
      "BUBBLE SORT is a sorting algorithm that sorts a N long array in ASCENDING order. This algorithm iterates through the list and compares adjacent values, if N1 is larger than N2 then the values are SWAPPED. In average case, it has O(N**2) complexity since it uses a NESTED LOOP, the outer while loop keeps track if the list is sorted or not, and the inner for loop compares the adjacent values and calls a swap helper function if N1>N2 is true, inside that if condition, the notSwapped variable that is used in the while loop is re-assined to true, and triggers another while loop iteration and the inner loop checks if array is sorted or not.",
  },
  {
    name: "mergeSort",
    mergeSort,
    explanation:
      "MERGE SORT is a sorting alorithm with an average time complexity of O(N log N). Merge Sort uses a DIVIDE & CONQUER algorithm. The array argument is RECURSIVELY SPLIT INTO 2 PARTS where the BASE CASE is that the SPLIT ARRAY HAS ONLY 1 ELEMENT, the MERGE function is passed the split array and uses a while loop that sorts the array by pushing the shifted array (right > left ? left.shift() : right.shift()) and then returns the sorted array.",
  },
  {
    name: "quickSort",
    quickSort,
    explanation:
      "QUICK SORT is a sorting algorithm with an average time complexity of O(N log N). Like Merge Sort, Quick Sort uses a DIVIDE & CONQUER algorithm. The first, last, middle, or random value is picked from the array and compared with the rest of the values, and they are split into an array that is GREATER or LESS than the value it gets compared to. That is recursivly continued until one element if left.  ",
  },
  {
    name: "binarySearch",
    binarySearch,
    explanation:
      "BINARY SEARCH is a searching algorithm that returns the index of the searching value with a Big O Time Complexity of O(log N) which is more efficient than Array.prototype.indexOf that uses an iterative approach and has a time complexity of O(N). However, the array in a binary search must be a SORTED ARRAY. It compares the middle value, so the root value with the target value, if rootValue > target then the right side is disregarded since the root value is larger than the target value, which means the target value can only be in the left sided array that is less than the root. Vice versa for the rootValue < target comparison. As either the left or right sided array is disregarded in every loop, the time complexity is O(log N). The loop terminates if rootValue === target, or if right >= left becomes false, which will happen as left is either incremented to a value higher than right if target value is larger than any value in the array, of if target value is less than any value in the array, then the right index will be decremented to less than left. Once the while loop is terminated, the binarySearch function returns -1, like indexOf. We can also construct a BinaryTree class that has a data, depth, left, and right properties, where the depth indicates the depth of the tree, and as a new level is added to either the leftChild or rightChild, that level's depth property is incremented. A child is added recursively by first comparing the data argument with this.data, if data > this.data is true then the data is added to this.right and this.right is recursively traversed until it points at null, then a new BinaryTree(data) is assinged to this.right. The same is done for this.left.",
  },
];

export default algorithm;
