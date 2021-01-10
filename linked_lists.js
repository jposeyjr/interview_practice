//linked list 10 -> 15 -> 20

class LinkedList {
  constructor(value) {
    //making the first node
    this.head = {
      value: value,
      next: null,
    };
    //because this is the first node it is both the hed and tail
    this.tail = this.head;
    //not needed but useful
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    //change the tail to newNode
    this.tail.next = newNode;
    //set tail to the new value newNode
    this.tail = newNode;
    //increase the length
    this.length++;
    return this;
  }
}

const myList = new LinkedList(10);
myList.append(15);
myList.append(20);
console.log(myList);
