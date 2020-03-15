import Node from './Node';
import LinkedList from './LinkedList';

class Queue extends LinkedList {
  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }

    if (this.tail !== null) {
        this.tail.next = node;
    }

    this.tail = node;
    return node;
  }

  dequeue() {
    const node = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
    }

    return node;
  }

  peek() {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }
}

export default Queue;
