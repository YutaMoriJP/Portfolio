import SinglyLinkedList from "./DataStructure/SinglyLinkedList";
import DoublyLinkedList from "./DataStructure/DoublyLinkedList";
import Queue from "./DataStructure/Queue";
import Stack from "./DataStructure/Stack";
import HashMap from "./DataStructure/HashMap";
import Tree from "./DataStructure/Tree";

const dataStructure = [
  {
    singlyLinkedList: SinglyLinkedList,
    explanation:
      "A Singly Linked List is a Linear Data Structure that is directional data, so it only points to the next node",
  },
  {
    doublyLinkedList: DoublyLinkedList,
    explanation:
      "A Doubly Linked List is a Linear Data Structure that is bidirecotional, so it points to the next & previous node. This means that the implementation of the Node is different compared to a Singly Linked LIst and it has a previous property and also has methods like setPreviousNode and getPreviousNode",
  },
  {
    queue: Queue,
    explanation:
      "A Queue is a Linear Data Structure that can either use an array or linkedlist and only allows operation on the front/head and back/tail. When adding new data (node in a linkedlist), we enqueue data and it's added to the BACK/TAIL and when dequeing data then the data is removed from the FRONT/HEAD. Think it of a line where the people at the front are served first and new poeple enter the line from the back. As we need to know about the tail and head, we use a doublyLinkedList instead of a singlyLinkedList",
  },
  {
    stack: Stack,
    explanation:
      "A Stack is a Linear Data Structure where the data is PUSHED to the top/head and data is POPPED off the top/head. Like with a Queue, we can either use an Array or LinkedList for implementation. But as we only operate on the head (unlike a Queue where we add data from the tail and rmeove data from the head), we will use a SinglyLinkedList",
  },
  {
    hashMap: HashMap,
    explanation:
      "A Hash Map or Hash Table is a Complex Data Structure that allows for efficient storing & accessing of key value pairs. It's implemented with an array where each key like 'Striker' is passed to a Hash Function that returns an index. The hash function is deterministic so it's a pure function when 'Striker' is passed then the returned index is ALWAYS the same. But something called a Collision can happen, which means that a key overwrites an existing index. As a hash table is limited in size, like a size of a Array with only 5 elements and if more than 5 values/data are passed to the hash map then the element will eventually overwrite each other. A hash function gurantees the same index will be returned from a given key value, but a weak implementation of a hash function will not prevent it to be unique. To avoid collision, we can implemenet SEPERATE CHAINING using a LinkedList. Instead of creating an array with null as elements in the beginning, the ARRAY will return a LinkedLIst as its element. So even if two values are assigned to index 2 in the Array, it's just added as a seperate NODE in the LinkedList. So, in the assign function, which receives a key and value argument, we assign the value to the hash map by calling linkedList.addTohead({key, value}) and in the retrieve function it iterates over the given linkedList obtained from the hash(key)'s index value and checks if the key argument matches currentNode.data.key === key in the while loop, and if it does then it returns current.data.value.",
  },
  {
    tree: Tree,
    explanation:
      "A Tree is a Complex Data Structure is built with Tree Nodes (has a data and children property) and a way of storing hierarchical data, used for file system, DOM, etc. Tree data structure, data grows DOWN from the ROOT NODE. The Node at the bottom, so a node without a child is called a LEAF NODE. The DEPTH of a Tree structure is how deep the tree can go, going one level deep from the root node. And counting from the Leaf Node is the height. WIDE TREE is a tree with many sibglings and it gets wider and wider. DEEP TREE is a tree with many parent-child connectsions and it goes deeper and deeper. A BINARY TREE puts constraints like that there can be AT MOST only 2 CHILD NODES, where the LEFT CHILD must have DATA THAT IS LESS THAN THE PARENT NODE's DATA and the RIGHT CHILD must have DATA THAT IS GREATER THAN THE PARENT NODE's DATA. This allows for a more efficient data searching by a quicker TRAVERSING OF THE BINARY TREE.",
  },
];

export default dataStructure;
