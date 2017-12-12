// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

/*
IOCE
Input: array
Output: majority element
*/

/*
Skeleton
1. loop through each element in array n 
2. for each element, increase count in counter object and do lookup and see if its count > n/2 
3. if it is, return element
4. otherwise, move onto next element
*/

const arr = [1, 2, 3, 3, 3];

const majorityElement = (nums) => {
    let countTracker = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        countTracker[current] ? countTracker[current]++ : countTracker[current] = 1;
        if (countTracker[nums[i]] > (nums.length / 2)) return nums[i];
    }
};

majorityElement(arr); //=> 3