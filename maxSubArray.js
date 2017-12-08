// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/*
IOCE
Input: Array of integers
Output: Sub-Array of integers containing the largest sum
*/

const maxSubArray = (arr) => {
    let currNum, currSum = arr[0], maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currNum = arr[i];
        currSum += currNum;
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currNum > currSum) {
            currSum = currNum;
        }
        if (currNum > maxSum) {
            maxSum = currNum;
        }
    }
    return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //=> 6