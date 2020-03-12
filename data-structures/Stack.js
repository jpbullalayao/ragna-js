import Node from './Node';

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    node.next = this.head;
    this.head = node;

    return node;
  }

  pop() {
   if (!this.head) {
     return null;
   }

   const node = this.head;
   this.head = this.head.next;
   return node;
  }

  peek() {
    if (!this.head) {
      return null;
    }
    
    return this.head.value;
  }
}

export default Stack;
