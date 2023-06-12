// Count Subarrays with Target Sum
// Given an unsorted array of integers, find the number of subarrays having sum exactly equal to a given number k.

// Sample Input

// arr = {10, 2, -2, -20, 10}
// K = -10

// Sample Output

// 3

// Explanation

// 10 + 2 - 2 + -20 = 10

// -20 + 10 = -10

// 2 + -2 + -20 + 10 = -10

// Expected Complexity
// Linear

// Hint : You may require a hashmap.

function countSubarrayWithTargetSum(arr, k) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let count = 0;
  while (j < arr.length) {
    if (sum == k) {
      count++;
      sum -= arr[i];
      i++;
    } else if (sum < k|| i==j) {
      sum += arr[j];
      j++;
    } else {
      sum -= arr[i];
      i++;
    }
  }
  while (i < arr.length) {
    if (sum == k) {
      count++;
    }
    sum -= arr[i];
    i++;
  }
  return count;
}

console.log(countSubarrayWithTargetSum([10, 2, -2, -20, 10],-10));
