// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

/*
 * Input:  {ListNode} head
 * Output:  {ListNode} head with duplicates removed
 */

/*
Skeleton:
1. while the node we're looking at is not null
2. check if we've seen it before
3. if we have, move on 
4. if we haven't connect last seen unique to current node and update last seen unique to current
5. after looping through the list, return the head 
*/

const list = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 3,
                        next: null,
                    }
                }
            }
        }
    }
};

const list2 = {
    val: 1,
    next: {
        val: 1,
        next: null,
    },
};

/*
Skeleton
1a. if current node value doesn't match value of lastUnique
1b. hold onto the current node's next value for next iteration of loop 
1c. create a new node with current node's value and next value of null
1d. attach the newly created node to lastUnique as its next value 
1e. update curr so that it now points to the stored next value 
1f. go back to step 1a and repeat
2. if node is null, return the head
*/

const deleteDuplicates = (head) => {
    if (!head) return [];
    let curr = head.next, lastUnique = head;
    lastUnique.next = null;
    while (curr) {
        if (curr.val !== lastUnique.val) {
            let next = curr.next;
            let newNode = { val: curr.val, next: null };
            lastUnique.next = newNode;
            lastUnique = newNode;
            curr = next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

deleteDuplicates(list2);