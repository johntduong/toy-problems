// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null,
        }
    }
};

const list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null,
        }
    }
};

/*
Skeleton
1. make two variables, each one pointing at the head of an input list
2a. while both nodes are not null
2b. compare both nodes to see which has the lesser value 
2c. create a copy of the node that has the lesser value and attach it to the result list (or make it the head if the result list is empty)
2d. if only one side is null, create a new copy for the node that exists and attach it to the tail
2e. update the pointers and go back to step 2a 
3. return the head of the result list
*/

const mergeTwoLists = (list1, list2) => {
    if (!list1 && !list2) return [];
    let result, prev, curr1 = list1, curr2 = list2, next;
    while (curr1 || curr2) {
        if (curr1 && !curr2) {
            next = curr1.next;
            prev ? prev.next = curr1 : result = curr1; prev = curr1;
            curr1 = next;
        }
        if (!curr1 && curr2) {
            next = curr2.next;
            prev ? prev.next = curr2 : result = curr2; prev = curr2;
            curr2 = next;
        }
        if (curr1 && curr2) {
            if (curr1.val < curr2.val) {
                next = curr1.next;
                prev ? prev.next = curr1 : result = curr1; prev = curr1;
                curr1 = next;
            } else {
                next = curr2.next;
                prev ? prev.next = curr2 : result = curr2; prev = curr2;
                curr2 = next;
            }
        }
    }
    return result;
};



mergeTwoLists(list1, list2); //==> 1->1->2->3->4->4