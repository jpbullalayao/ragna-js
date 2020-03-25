/**
 * middleNode
 * Takes in a singly-linked list and returns the middle node.
 * If there are two middle nodes, it returns the second one.
 * 
 * @param {Node} head
 * @return {Node}
 */
const middleNode = (head) => {
  const dict = {};
  
  let node = head;
  let i = 0;

  while (node != null) {
    dict[i] = node;
    
    node = node.next;
    i++;
  }

  const length = i;
  const middleIndex = Math.floor(length / 2);
  return dict[middleIndex];
};
