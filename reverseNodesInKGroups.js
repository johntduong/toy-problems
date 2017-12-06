// Note: Your solution should have O(n) time complexity, where n is the number of element in l, and O(1) additional space complexity, since this is what you would be asked to accomplish in an interview.

// Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that is less than or equal to the length of l. If the number of nodes in the linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.

// You may not alter the values in the nodes - only the nodes themselves can be changed.

let list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: {
                                val: 8,
                                next: {
                                    val: 9,
                                    next: null
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

let k = 3;

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

const reverseList = (list, k, headOfNextGroup, tailOfLastGroup, tailOfThisGroup, prev) => {
    let i = k;
    if (i === 0) {
        if (tailOfLastGroup) {
            tailOfLastGroup.next = prev;
            return tailOfThisGroup;
        }
        return tailOfThisGroup;
    }
    let curr = list;
    let next = list.next;
    if (!prev) {
        tailOfThisGroup = curr;
        curr.next = headOfNextGroup;
        prev = curr;
        return reverseList(next, i - 1, headOfNextGroup, tailOfLastGroup, tailOfThisGroup, prev);
    }
    curr.next = prev;
    prev = curr;
    return reverseList(next, i - 1, headOfNextGroup, tailOfLastGroup, tailOfThisGroup, prev);
};

const scanAhead = (node, k) => {
    if (k === 1 || !node) {
        return node || -1;
    }
    return scanAhead(node.next, k - 1);
};


const reverseNodesInKGroups = (list, k, headOfNextGroup, tailOfLastGroup, result) => {
    if (!list) return result || -1;
    let ahead = scanAhead(list, k);
    if (ahead === -1) return result || list;
    headOfNextGroup = ahead.next;
    if (!tailOfLastGroup) tailOfLastGroup = null;
    if (!result) result = ahead;
    tailOfLastGroup = reverseList(list, k, headOfNextGroup, tailOfLastGroup);
    return reverseNodesInKGroups(headOfNextGroup, k, headOfNextGroup, tailOfLastGroup, result);
};



module.exports = {
    'reverseNodesInKGroups': reverseNodesInKGroups,
    'scanAhead': scanAhead,
}