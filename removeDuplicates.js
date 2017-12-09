// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

/*
 * @param {number[]} nums
 * @return {number}
 */

/*
Skeleton
- for each numer in the array
  - if it's a duplicate, meaning it's less than or equal to lastSeenUnique
    - scan head from the current scan index to find a new unique number than is greater
    - swap the two values and save the current index where you've scanned so you can search from there
    - increment the length counter
  - if it's not a duplicate, meaning it's greater than the lastSeenUnique
    - increment length counter and index
    - update lastSeenUniqe
- return length counter
*/

const removeDuplicates = (nums) => {
    if (nums.length < 2) return nums.length;
    let index = 1, counter = 1, lastSeenUnique = nums[0], scanIndex = index;
    while (index < nums.length) {
        if (nums[index] <= lastSeenUnique) {
            while (nums[scanIndex] <= lastSeenUnique) {
                scanIndex++;
            }
            if (scanIndex < nums.length) {
                nums[index] = nums[scanIndex];
                counter++;
                lastSeenUnique = nums[index];
            }
            index++;
        } else {
            lastSeenUnique = nums[index];
            counter++;
            index++;
        }
    }
    console.log(nums);
    return counter;
};

removeDuplicates([1, 2, 2]);