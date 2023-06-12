// Sliding Window Maximum
// Given an array of integers and an integer K, return a vector containing  maximum for each and every contiguous subarray of size k.

// Constraints:

// -10000<=A[i]<=10000, where 0<i<size of array

// K>0

// Sample Input

// K = 3
// input = {1, 2, 3, 1, 4, 5, 2, 3, 6}
// Sample Output

// output = {3,3,4,5,5,5,6}
// Explanation

// Maximum of 1, 2, 3 is 3

// Maximum of 2, 3, 1 is 3

// Maximum of 3, 1, 4 is 4

// Maximum of 1, 4, 5 is 5

// Maximum of 4, 5, 2 is 5

// Maximum of 5, 2, 3 is 5

// Maximum of 2, 3, 6 is 6

// Note - The optimized solution to this problem solution is slightly tricky & non-trivial, and involves use of deque (doubly ended queue), we have discussed this problem in Stacks & Queues Section.

function maxInWindow(arr, k) {
  let currMaxEle = Number.MIN_VALUE;
  let j;
  let i = 0;
  let res = new Array(arr.length - 3);
  for (j = 0; j < k; j++) {
    currMaxEle = Math.max(arr[j], currMaxEle);
  }
  j--;
  while (j < arr.length) {
    if (arr[i - 1] == currMaxEle) {
      let maxEle = arr[i];
      for (let k = i; k <= j; k++) {
        maxEle = Math.max(maxEle, arr[k]);
      }
      currMaxEle = maxEle;
    } else {
      currMaxEle = Math.max(arr[j], currMaxEle);
    }
    res[i] = currMaxEle;
    i++;
    j++;
  }
  return res;
}

console.log(maxInWindow([1, 2, 3, 1, 4, 5, 0, 0, 0], 3));
