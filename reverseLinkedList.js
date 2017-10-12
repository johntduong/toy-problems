/* Hooray! It's opposite day. Linked lists go the opposite way today.
Write a function for reversing a linked list. ↴ Do it in-place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }
*/

const reverseList = (node) => {
  let current = node;
  let prev = null;
  let nextNode = null;
  while (current) {
    // capture next node
    nextNode = current.next;
    // assign previous
    current.next = prev;
    // move to next node
    prev = current;
    current = nextNode;
  }
  return prev;
};

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

let linkedList = new LinkedListNode(0);
linkedList.next = new LinkedListNode(1);


console.log(linkedList);

reverseLinkedList(linkedList);

