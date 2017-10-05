// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

// [1, 2, 3, 4, 5, 6, 7]

// l: [1, 2, 3, 3]
// k: 3

// let l = new ListNode(1);
// l.next = new ListNode(2);
// l.next.next = new ListNode(3);
// l.next.next.next = new ListNode(4);
// l.next.next.next.next = new ListNode(5);
// l.next.next.next.next.next = new ListNode(6);
// l.next.next.next.next.next.next = new ListNode(7);

// let l = new ListNode(3);
// l.next = new ListNode(1);
// l.next.next = new ListNode(2);
// l.next.next.next = new ListNode(3);
// l.next.next.next.next = new ListNode(4);
// l.next.next.next.next.next = new ListNode(5);

let l = new ListNode(1000);
l.next = new ListNode(1000);

let k = 1000;

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

const removeKFromList = (l, k) => {
  if (l !== null) {
    let newList = findNewList(l,k);
    
    if (newList !== null) {
      let lastKnownNonK = newList;
      let currNode = newList.next;
      while (currNode !== null) {
        if (currNode.value !== k) {
          lastKnownNonK = currNode;
          currNode = currNode.next;
        } else {
          lastKnownNonK.next = currNode.next;
          currNode = currNode.next;
        }
      }
      return newList;
    } else {
      return [];
    }
  } else {
    return [];
  }
};

const findNewList = (l,k) => {
  let newList = null;
  let currNode = l;
  while (newList === null) {
    if (currNode.value !== k) {
      newList = currNode;
      return newList;
    } else {
      if (currNode.next !== null) {
        currNode = currNode.next;
      } else {
        return newList;
      }
    }
  }
};

removeKFromList(l,k);