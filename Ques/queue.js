//queues one of the worst things to try to spell!
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Queues are first in first out so just like waiting at a restaurant the first person to sign up for a table gets one!
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //simply return the first person or item in que
  peek() {
    return this.first;
  }

  //get the next que and if it is the first it is very simple assign it to the first and last
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      //else add it to the last.next and last to ensure that the order is maintained
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  //if there is no first end it
  dequeue() {
    if (!this.first) {
      return null;
    }
    //if it is the last node change last to null;
    if (this.first === this.last) {
      this.last = null;
    }
    //if we don't have the memory holding pointer we won't have a reference to the first anymore encase we need the info later
    const holdingPointer = this.first;
    //after we remove them, whoever is next i.e next in que becomes first
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('James');
myQueue.enqueue('Harley');
myQueue.enqueue('Meghan');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
