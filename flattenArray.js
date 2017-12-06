/*
Input: multidimensional array
Output: flattened array
Constraints: n/a
Edge Cases: TBD
*/

/*
Skeleton:
1. create a result array
2. iterate through elements
3. if element is an array, recurse on subArray and concat results back to result array
4. return result
*/

const arr = [[1,2,3],[4,5,6]];

const flatten = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten(arr));