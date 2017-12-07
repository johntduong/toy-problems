// Given an array of integers, find if the array contains any duplicates.Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

const containsDuplicate = (nums) => {
    let tracker = {};
    for (let i = 0; i < nums.length; i++) {
        if (tracker[nums[i]]) return true;
        tracker[nums[i]] = 1;
    }
    return false;
};