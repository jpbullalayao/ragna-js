import Node from '../data-structures/Node';

/**
 * reverseList
 * Returns a reversed version of a given Linked List
 *
 * @param {Node} head
 * @return {Node}
 */
export const reverseList = (head) => {
  let node = head;
  let newHead = head;

  while (node !== null) {
    const newNode = new Node(node.value);
    
    if (newHead !== head) {
      newNode.next = newHead;
    }

    newHead = newNode;
    node = node.next;
  }

  return newHead;
}
