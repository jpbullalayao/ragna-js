/**
 * swap
 * Recursive functino that swaps the current node value with the next node value.
 * 
 * @param {ListNode} head
 */
const swap = (head) => {
  if (head === null || head.next === null) {
    return;
  }
  
  const nextVal = head.next.val;
  head.next.val = head.val;
  head.val = nextVal;
  
  swap(head.next.next);
}

/**
 * swapPairs
 * Function that calls another recursive function to swap two adjust linked list values.
 * Ex: Given 1->2->3->4, swapPairs returns 2->1->4->3
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  swap(head);
  return head;
};