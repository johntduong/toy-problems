
/* 
You have a collection of coins, and you know the values of the coins and the quantity of each type of 
coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.

Example

For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
possibleSums(coins, quantity) = 9.

Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.
As you can see, there are 9 distinct sums that can be created from non-empty groupings of your coins.

Input/Output

[time limit] 4000ms (js)
[input] array.integer coins

An array containing the values of the coins in your collection.

Guaranteed constraints:
1 ≤ coins.length ≤ 20,
1 ≤ coins[i] ≤ 104.

[input] array.integer quantity

An array containing the quantity of each type of coin in your collection. quantity[i] indicates the 
number of coins that have a value of coins[i].

Guaranteed constraints:
quantity.length = coins.length,
1 ≤ quantity[i] ≤ 105.

It is guaranteed that (quantity[0] + 1) * (quantity[1] + 1) * ... * (quantity[quantity.length - 1] + 1) <= 106.

[output] integer

The number of different possible sums that can be created from non-empty groupings of your coins.
*/

const possibleSums = (coins, quantity) => {
  const sumsTracker = {};
  const flattenedCoins = [];
  
  for (let currQuantity = 0; currQuantity < quantity.length; currQuantity++) {
    while (quantity[currQuantity] > 0) {
      flattenedCoins.push(coins[currQuantity]);
      quantity[currQuantity]--;
    }
  }
  
  for (let currCoin = 0; currCoin < flattenedCoins.length; currCoin++) {
    // remove currentCoin from flattenedCoins and hold onto it (will push it back)
    let removed = flattenedCoins[currCoin];
    // need to make a copy of flattenedCoins without held value which we can iterate through with window
    let remaining = flattenedCoins.slice();
    remaining.splice(currCoin, 1);
    // check if the held value exists in sumsTracker and add if it does not exist 
    sumsTracker[removed] ? sumsTracker[removed]++ : sumsTracker[removed] = 1;
    // make a windowSize variable and set its value to 0
    let windowSize = 0;
    // make a window variable and set it to an empty array or nothing;
    let currWindow;
    // while windowSize value is less than length of remaining flattenedCoins (copy)
    while (windowSize < remaining.length) {
      // starting sum is value of held coin
      let sum = removed;
      // for each element in flattenedCoins copy array 
      for (let coin = 0; coin < remaining.length; coin++) {
      // slice it up from current element until its index plus windowSize value + 1 
      let currentWindow = remaining.slice(coin, coin + windowSize + 1);
        // if window length is less than window size (value) + 1, do not continue
        if (currentWindow.length === windowSize + 1) {
          // otherwise, add all the values in window array to the starting sum 
          for (let val = 0; val < currentWindow.length; val++) {
            sum+=currentWindow[val];
          }
          // check if the currentSum is in the sumsTracker and add if it isn't
          sumsTracker[sum] ? sumsTracker[sum]++ : sumsTracker[sum] = 1;
          // reset sum for next iteration 
          sum = removed;
        }
      }
      windowSize++;
    }
  }
  return Object.keys(sumsTracker).length;
};

// Solution time: 2.5 pomodoro cycles

console.log(possibleSums([10, 50, 100], [1,2,1]));
