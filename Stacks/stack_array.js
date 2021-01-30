//with arrays built in stacks become a lot easier to do
class Stack {
  constructor() {
    this.array = [];
  }

  //stacks at LIFO so last in first out, we simply get the length and remove 1 to get the last item in it.
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
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
