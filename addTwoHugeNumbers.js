// You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

// Example

// For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
// addTwoHugeNumbers(a, b) = [9876, 5434, 0].

// Explanation: 987654321999 + 18001 = 987654340000.

// For a = [123, 4, 5] and b = [100, 100, 100], the output should be
// addTwoHugeNumbers(a, b) = [223, 104, 105].

// Explanation: 12300040005 + 10001000100 = 22301040105.

// Input/Output

// [time limit] 4000ms (js)
// [input] linkedlist.integer a

// The first number, without its leading zeros.

// Guaranteed constraints:
// 0 ≤ a size ≤ 104,
// 0 ≤ element value ≤ 9999.

// [input] linkedlist.integer b

// The second number, without its leading zeros.

// Guaranteed constraints:
// 0 ≤ b size ≤ 104,
// 0 ≤ element value ≤ 9999.

// [output] linkedlist.integer

// The result of adding a and b together, returned without leading zeros in the same format.

// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//

// let listOne = new ListNode(9876);
// listOne.next = new ListNode(5432);
// listOne.next.next = new ListNode(1999);

// let listTwo = new ListNode(1);
// listTwo.next = new ListNode(8001);

let listOne = new ListNode(123);
listOne.next = new ListNode(4);
listOne.next.next = new ListNode(5);

let listTwo = new ListNode(100);
listTwo.next = new ListNode(100);
listTwo.next.next = new ListNode(100);

function addTwoHugeNumbers(a, b) {
  // turn a into long integer 
  // turn b into long integer 
  let firstNumber = listToInteger(a);
  let secondNumber = listToInteger(b);
  // add the a and b integers together
  let sum = add(firstNumber, secondNumber);
  // turn result into linked list
  return sumToList(sum);
}

function listToInteger(list) {
  let result = [];
  let str ='';
  let currNode = list;
  while (currNode) {
    // capture string
    str += currNode.value;
    // split it and check its length
    str = str.split('');
    // if length < 4, unshift 0s to front until length is 4 
    while (str.length < 4) {
      str.unshift('0');
    }
    result.push(str.join(''));
    // join it back together and push it to results 
    str = '';
    currNode = currNode.next;
  }
  return result.join('');
}

function add(firstNumber, secondNumber) {
  // find the longer string 
  if (firstNumber.length > secondNumber.length) {
    return buildSumString(firstNumber, secondNumber);
    // iterate from right to left through the longer string
      // for each digit in the longer string
  } else {
    return buildSumString(secondNumber, firstNumber);
  }
}

function buildSumString(longerStr, shorterStr) {
  let carriedOver = 0;
  let result = [];
  let currSum = '';
  let currShorterIndex = shorterStr.length-1;
  
  for (let i = longerStr.length-1; i >= 0; i--) {
    if (shorterStr[currShorterIndex]) {
      currSum = String(parseInt(longerStr[i]) + parseInt(shorterStr[currShorterIndex]) + carriedOver);
      // if the length of currSum is greater than 1
      if (currSum.length > 1) {
        // splice off the last digit from currSum and add it to result string 
        result.unshift(currSum.slice(currSum.length-1));
        carriedOver = parseInt(currSum.slice(0, currSum.length-1));
        // assign carriedOver to be 1 or whatever the leftover currentSum digit is 
      } else {
        // add currSum to result string 
        result.unshift(currSum);
        // assign carriedOver to be 0;
        carriedOver = 0;
      }
      currShorterIndex--;
    } else {
      currSum = String(parseInt(longerStr[i]) + carriedOver);
      if (currSum.length > 1) {
        // splice off the last digit from currSum and add it to result string 
        result.unshift(currSum.slice(currSum.length-1));
        carriedOver = parseInt(currSum.slice(0, currSum.length-1));
        // assign carriedOver to be 1 or whatever the leftover currentSum digit is 
      } else {
        // add currSum to result string 
        result.unshift(currSum);
        // assign carriedOver to be 0;
        carriedOver = 0;
      }
    }
  }
  if (carriedOver > 0) {
    result.unshift(carriedOver);  
  }
  return result.join('');
}

function sumToList(sum) {
  // turn sum into array of up-to-4-digit numbers
    // turn sum into array of up-to-4-digit numbers
  let result = [];
  let splitSum = sum.split('');
  
  // while list length > 0
  while (splitSum.length > 0) {
    // take out four numbers off the end of the list 
    let spliced = splitSum.splice(splitSum.length-4,4);
    // remove any leading zeros
    while (spliced[0] === '0') {
      spliced.shift();
    }
    // push digits as a single string to result array
    if (spliced.length === 0) {
      // if the string is empty, just push 0 to front
      result.unshift('0');
    } else {
      result.unshift(spliced.join(''));
    }
  }
  
  // create a new list starting with first value in result array 
  // go through remaining entries in list and create new lists and create a chain of linked lists
  let resultList = new ListNode(parseInt(result.shift()));
  let currNode = resultList;
  while (result.length > 0) {
    let currValue = result.shift();
    currNode.next = new ListNode(parseInt(currValue));
    currNode = currNode.next;
  }
  return resultList;
}

addTwoHugeNumbers(listOne, listTwo);