// From https://codefights.com/interview-practice/task/5A8jwLGcEpTPyyjTB

// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do   during an interview.
// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

const a = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]];
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]]
// Input/Output

// [time limit] 4000ms (js)
// [input] array.array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 100, each a can be betwen 1 to and including 100 in length
// a[i].length = a.length, each sub array is equal to length of a
// 1 ≤ a[i][j] ≤ 104. each intger is between 1 and including 10000

// [output] array.array.integer

// let rotateImage = (matrix) => {
//   // create a results array
//   let results = [];
//   // iterate over each column in the matrix
//   for (let col = 0; col < matrix.length; col++) {
//     // create an array to store the rotated row
//     let rotated = [];
//     // iterate over each row in the matrix
//     for (let row = 0; row < matrix.length; row++) {
//       // unshift each item into the rotated row array
//       rotated.unshift(matrix[row][col]);
//     }
//     //push the rotated row into the results array
//     results.push(rotated);
//   }
  
//   //return the result array
//   return results;
// };

const rotateImage = (matrix) => {
  let n = matrix.length-1;

  for (let layer = 0; layer < Math.ceil(matrix.length/2); layer ++) {
    for (let col = layer; col < matrix.length-1-layer; col++) {
      let temp = matrix[layer][col];
      matrix[layer][col] = matrix[n-col][layer];
      matrix[n-col][layer] = matrix[n-layer][n-col];
      matrix[n-layer][n-col] = matrix[col][n-layer];
      matrix[col][n-layer] = temp;
    }
  }

  return matrix;
};

let b = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

rotateImage(a);