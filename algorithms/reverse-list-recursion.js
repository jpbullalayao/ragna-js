/**
 * reverseList
 * Returns a reversed version of a given Linked List via recursion
 *
 * @param {Node} head
 * @return {Node}
 */
const reverseList = (head) => {
  if (!head || !head.next)  {
    return head;
  }
  
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
