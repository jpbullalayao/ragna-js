import Node from './Node';
import LinkedList from './LinkedList';

class Stack extends LinkedList {
  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
 
    return node;
  }

  pop() {
    if (!this.head) {
      return this.head;
    }

    const node = this.head;
    this.head = this.head.next;
    return node;
  }

  peek() {
    if (!this.head) {
      return this.head;
    }
    
    return this.head.value;
  }
}
