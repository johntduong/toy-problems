// From https://codefights.com/interview-practice/task/uX5iLwhc6L5ckSyNC
// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

// Input/Output

// [time limit] 4000ms (js)
// [input] string s

// A string that contains only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.

// [output] char

// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

function firstNotRepeatingCharacter(s) {
 for (var i = 0; i < s.length; i++) {
   if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
     return s[i];
   }
 }
 return "_"; 
}

firstNotRepeatingCharacter("abacabaabacaba");
firstNotRepeatingCharacter("abacabad");