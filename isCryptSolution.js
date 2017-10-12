// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

// Example

let crypt = ["SEND", "MORE", "MONEY"];

let solution = [['O', '0'],
                ['M', '1'],
                ['Y', '2'],
                ['E', '5'],
                ['N', '6'],
                ['D', '7'],
                ['R', '8'],
                ['S', '9']];
// the output should be
// isCryptSolution(crypt, solution) = true.

// When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.

let crypt2 = ["TEN", "TWO", "ONE"];

let solution2 = [['O', '1'],
                 ['T', '0'],
                 ['W', '9'],
                 ['E', '5'],
                 ['N', '4']];
// the output should be
// isCryptSolution(crypt, solution) = false.

// Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes, meaning that this is not a valid solution.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.string crypt

// An array of three non-empty strings containing only uppercase English letters.

// Guaranteed constraints:
// crypt.length = 3,
// 1 ≤ crypt[i].length ≤ 14.

// [input] array.array.char solution

// An array consisting of pairs of characters that represent the correspondence between letters and numbers in the cryptarithm. The first character in the pair is an uppercase English letter, and the second one is a digit in the range from 0 to 9.

// Guaranteed constraints:
// solution[i].length = 2,
// 'A' ≤ solution[i][0] ≤ 'Z',
// '0' ≤ solution[i][1] ≤ '9',
// solution[i][0] ≠ solution[j][0], i ≠ j,
// solution[i][1] ≠ solution[j][1], i ≠ j.

// It is guaranteed that solution only contains entries for the letters present in crypt and that different letters have different values.

// [output] boolean

// Return true if the solution represents the correct solution to the cryptarithm crypt, otherwise return false.

function isCryptSolution(crypt, solutions) {
  //declare variables for word1, word2, word3
  let words = crypt.slice();
  let evaluated;
  //turn each string inside crypt array into string of integers and assign it to its own variable (word1, word2, word3)
  //for each word
  for (let word = 0; word < words.length; word++) {
    //make a newWord variable to store string of digits converted from word characters
    let newWord = '';
    //for each letter in words[word] which we can name currWord
    for (let letter = 0; letter < words[word].length; letter++) {
      //go through each subarray in solution 
      for (let solution = 0; solution < solutions.length; solution++) {
        //find matching number and concat/add it to newWord string 
        if (words[word][letter] === solutions[solution][0]) {
          newWord += solutions[solution][1];
        }
      }
    }
    //after iterating through a word, replace the corresponding one in words array with newWord 
    words[word] = newWord;
  }
  //iterate through each word in words
  for (let newWord = 0; newWord < words.length; newWord++) {
    //if any of them is greater than length of 1
    if (words[newWord].length > 1) {
      //if there's a leading zero 
      if (words[newWord][0] === '0') {
        //return false
        return false;
      }
    }
  }
  //add word1 to word2 and check the result to see if it matches word3
  evaluated = parseInt(words[0]) + parseInt(words[1]);
  return Boolean(parseInt(evaluated) === parseInt(words[2]));
}

isCryptSolution(crypt2, solution2);

//TIME TO FINISH: 2 POMODORO CYCLES