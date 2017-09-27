// From https://codefights.com/interview-practice/task/pMvymcahZ8dY4g75q/description

//Input: Array
// Output: Number value of element whose second occurrence has the minimal index value of all other duplicate pairs

// Brute force method
// const firstDuplicate = function(arr) => {
//   //go through each element and check the indexOf of second element
//   //use a variable to keep track of lowest index so far 
//   let lowestDuplicateIndex = -1;
//   let result = -1;
  
//   for (let i = 0; i < arr.length; i++) {
//     let foundIndex = arr.indexOf(arr[i], i+1);
//     if (foundIndex !== 0) {
//       if (lowestDuplicateIndex === -1) {
//         lowestDuplicateIndex = foundIndex;
//       } else if (foundIndex !== -1 && foundIndex < lowestDuplicateIndex) {
//         lowestDuplicateIndex = foundIndex;
//         result = arr[lowestDuplicateIndex];
//       }
//     }
//   }
//   return result;
// };

// firstDuplicate([2,4,4,3]);
// firstDuplicate([2, 1, 4, 3, 1, 3, 5, 1, 2]);
// firstDuplicate([2, 4, 3, 5, 1]);
// firstDuplicate([2,2]);

// O(N) Time Complexity & O(1) Space
const lowestDuplicate => (arr) {

  for (let i = 0; i < arr.length; i++) {
    const val = Math.abs(arr[i]);
    if (arr[val - 1] < 0) return val;
    arr[val - 1] = -arr[val - 1];
  }

  return -1;
}

lowestDuplicate([2, 3, 3, 1, 5, 2]);