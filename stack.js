//Node object that is used to keep code DRY vs the linked list example where I hard coded it to make it very clear
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Stack is a Last In First Out list, i.e if I did james, harley, meghan. It will go in just like I typed. They are like plates
//they get stacked up and the last plate added gets removed or grabbed first
class Stack {
  //stacks are made of top, bottom and length again to help make things easier
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  //peek is how we are able to see the top of or 'head'
  peek() {
    return this.top;
  }
  //as you would think push, pushes the value to the bottom of the list
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  //pop just like when used in an array removes the last value from the list
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //again this is just to hold the point in memory but is never called as we simply need to hold that value temporary
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('james');
myStack.push('harley');
myStack.push('meghan');
console.log(myStack);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
