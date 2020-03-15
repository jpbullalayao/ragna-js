class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  print() {
    let node = this.head;
    const array = [];

    while(node != null) {
      array.push(node.value);
      node = node.next;
    }

   return array.join(', ');
  }
}

export default LinkedList;
