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
    return this.printList();
  } //end of append
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    //we do it this way to prevent issues
    newNode.next = this.head;
    //setting head to new object
    this.head = newNode;
    this.length++;
    return this.printList();
  } //end prepend

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    //find first index value
    //store that value
    const leadNode = this.traverseToIndex(index - 1);
    const nextNode = leadNode.next;
    leadNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this.printList();
  } //end of insert value
  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  } //end traverseToIndex
  delete(index) {
    //grab the lead node
    const leadNode = this.traverseToIndex(index - 1);
    //grab the next value from it
    const removeNode = leadNode.next;
    leadNode.next = removeNode.next;
    this.length--;
    this.printList();
  } //end of delete
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  } //end of reverse list
}

const myList = new LinkedList(10);
myList.append(15);
myList.append(20);
myList.printList();
myList.prepend(0);
console.log(myList.printList());
myList.insert(2, 20);
console.log(myList.printList());
myList.delete(2);
console.log(myList.printList());
console.log(myList.reverse());
