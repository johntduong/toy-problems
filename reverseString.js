/*
IOCE
Input: String
Output: Reversed String
*/

/* 
Skeleton
- start at the end
- push each element to result
- return result
*/


const reverseString = (s) => {
    let result = [];
    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
    }
    return result.join('');
};

reverseString('hello');

// Time complexity: O(N)
// Space complexity: O(N)