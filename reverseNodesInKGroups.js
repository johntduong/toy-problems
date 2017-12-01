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
Input: linked list (current node), k
Output: linked list reversed in k groups
Constraints: O(N) time, O(1) additional space, 1 <= k <= l size
Edge Cases:
- Empty list, k = 0
*/

/*
Skeleton:
1. find the node that is K nodes away, if there is one
2. if nodeKAhead does not exist, return the head of modified linked list
3. if there is one, then do a partial reverse from current node to nodeKAhead
4. update pointers and call function recursively on nodeKAhead
*/

/* 
The basic steps are
0. Start at head node, set to current;
1. Scan ahead K elements from current position with a separate pointer, ahead. If you reach the end, just return, because you do not have to reverse 'partial' groups.
2. Reverse the list between your current pointer and the pointer that is K away. The only difference from a 'normal' reversing of a linked list is that you need to pay attention to what ahead.next originally pointed to. You cannot just assume it was NULL.
3. Set current to the original ahead.next node, and go back to step 1
*/

const reverseNodesInKGroups = (l, k, result) => {
    if (!l) return -1;
    // 1. find the node that is K nodes away, if there is one
    let ahead = scanAhead(l, k);
    // 2. if nodeKAhead does not exist, return the head of modified linked list
    if (!ahead) return result;
    // 3. if there is one,
    // 3a. if there is no result, make result equal ahead
    if (!result) result = ahead;
    // 3b. do a partial reverse from current node to and including ahead
    partialReverse(l, k, ahead.next);
    // 4. update pointers and call function recursively on nodeKAhead
    return reverseNodesInKGroups(ahead.next, k, result);
};

/* 
Input: linked list, k
Output: boolean that says whether there are enough nodes left to do a partial reverse
*/

/*
Skeleton:
1. call scanAhead on curr
1a. if it returns nothing, attach current list to tail of result list and return the result list
2. do a partial reverse from curr until node returned by scanAhead (be sure to remember what scan ahead's original next value was)
3. set curr to scan ahead's original next value
*/

const scanAhead = (l, k) => {
    if (!l) return -1;
    if (k === 1) return l;
    return scanAhead(l.next, k-1);
}

/* 
IOCE
Input: list, k, ahead node's next value,
Output: nothing, it just reverses nodes
*/

/*
1. if k is 0, return
2. else 
*/

module.exports = {
    'reverseNodesInKGroups': reverseNodesInKGroups,
    'scanAhead': scanAhead,
}