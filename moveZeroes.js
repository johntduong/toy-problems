/*
IOCE:
Input: Array of nums
Output: Modified input array with all 0s moved to the end 
Constraints: No copies, input must be modified in place
Edge Cases: all 0s, no 0s, empty array, array of non-numbers, array of single element
*/

/*
Skeleton:
1. For each element of input array 
  a. If it's not a 0, continue
  b. Else, from this element to second to last, replace with next element then make last element a 0 
2. Return input array 
*/

// const moveZeroes = (arr) => {
//   let zeroCount = 0;
//   for (let i = 0; i < arr.length; ) {
//     if (arr[i] !== 0) {
//       i++;
//     } else {
//       zeroCount++;
//       for (let j = i; j < arr.length-1; j++) {
//         arr[j] = arr[j+1];
//       }
//       arr.pop();
//     }
//   }

//   while (zeroCount > 0) {
//     arr.push(0);
//     zeroCount--;
//   }

//   return arr;
// };

/*
Time Complexity: O(n*n)
Space Complexity: O(1)
*/

/*
Skeleton:
1. Create two trackers, one for index of current element and another for index of last non-zero found
2. Starting from index of current element until the last element in the input array 
3. If current element is not a 0, swap current element with element at index of last non-zero incremented
4. If current element is 0, go to next element
*/

const moveZeroes = arr => {
  let lastNonZero = 0;
  for (let curr = 0; curr < arr.length; curr++) {
    if (arr[curr] !== 0) {
      let temp = arr[curr];
      arr[curr] = arr[lastNonZero];
      arr[lastNonZero] = temp;
      lastNonZero++;
    }
  }
  return arr;
};

moveZeroes([0, 0, 0, 1, 2, 4, 3]);
