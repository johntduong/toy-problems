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

/* 
Input: linked list (current node), k, counter, resultListHead, resultListTail, currListHead, currListTail
Output: linked list reversed in k groups
Constraints: O(N) time, O(1) additional space, 1 <= k <= l size
Edge Cases:
- Empty list, k = 0
*/

/*
Skeleton:
0. if node is null, attach non-reversed head of kGroup to end of resultList (resultListTail)
1. if counter is 0, return attach currList to end of resultList (resultListTail), reset count to k
2. if currList is empty, set new head of kGroup and tail of kGroup
3. attach node to end of current reversed kGroup list and make it new tail of kGroup
4. Call function again on next node with k decremented
*/

/* 
The basic steps are
0. Start at head node, set to current;
1. Scan ahead K elements from current position with a separate pointer, ahead. If you reach the end, just return, because you do not have to reverse 'partial' groups.
2. Reverse the list between your current pointer and the pointer that is K away. The only difference from a 'normal' reversing of a linked list is that you need to pay attention to what ahead.next originally pointed to. You cannot just assume it was NULL.
3. Set current to the original ahead.next node, and go back to step 1
*/

const reverseNodesInKGroups = (l, k) => {
    let resultListHead, resultListTail, formerListHead, currListHead, currListTail, curr = l, count = k;
    while (curr) {
        if (count === 0) {
            count = k;
            resultListTail.next = currListHead;
            resultListTail = currListHead;
        }

        curr = curr.next;
    }
    if (count > 0) {
        // attach 
    }
    return resultListHead;
};

module.exports = {
}