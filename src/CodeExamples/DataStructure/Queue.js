const Queue = `class Queue {
    constructor(maxSize = Infinity) {
      this.queue = new LinkedList();
      this.size = 0;
      this.maxSize = maxSize;
    }
    //if the Queue has a size limit
    //we check if maxSize is larger than current size
    //avoid OVERFLOW
    hasRoom() {
      return this.maxSize > this.size;
    }
    //checks if Queue is empty or not
    //avoids UNDERFLOW
    isEmpty() {
      return this.size === 0;
    }
    //adds data to the BACK of the queue
    enqueue(data) {
      //adding a new Node to the tail of the LinkedList
      //But first we need to check if Queue has still memory space left
      if (this.hasRoom()) {
        this.queue.addToTail(data);
        //we keep track of the size of queue, so increment it
        this.size += 1;
      } else {
        throw new Error('Queue has a size limit of this.maxSize');
      }
    }
    //removes data from the FRONT of the queue
    dequeue() {
      //as our Queue is a LinkedList, we remove data from the HEAD
      //but first, in order to avoid UNDERFLOW
      //we need to check if Queue is empty or not
      if (!this.isEmpty()) {
        //remove head from the linkedlist, which is the FRONT of the Queue
        this.queue.removeHead();
        //decrement size of the queue
        this.size -= 1;
      } else {
        throw new Error('Queue is empty so removing data from the queue causes UNDERFLOW');
      }
    }
  }`;

export default Queue;
