// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input: Array of integers
// [4,3,2,7,8,2,3,1]

// Output: Array of elements that have duplicates
// [2,3]

/*
Skeleton:
- for each element, use it as an index (subtract one) to see if the element at that index is negative
- if it's negative, then you've seen it before so you can push it to a result array 
- if it's not negative, make it so 
*/

const findDuplicates = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[Math.abs(nums[i]) - 1] = -(nums[Math.abs(nums[i]) - 1]);
        }
    }
    return result;
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);