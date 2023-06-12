// Staircase Search
// You are given a M x N matrix which is row wise and column wise sorted. You have to search the index of a given integer K in the matrix.
// Input Format:
// Function contains integer M, integer N ,2D vector containing integers and an integer k.
// Output Format:
// Return a pair of integers {x,y} where x is the row index and y is column index of k in the matrix.
// Expected Complexity:
// Linear
// Sample Testcase:
// Input:
// 3 3
// 1 4 9
// 2 5 10
// 6 7 11
// 10
// Output:
// {1,2}
// Explanation:
// Index of 10 in matrix is 1,2.

// function striaCase(matrix, k) {
//   let start = 0;
//   let end = matrix.length - 1;

//   while (start <= end) {
//     let mid = start + Math.floor((end - start) / 2);
//     let midLen = matrix[mid].length - 1;
//     if (matrix[mid][0] <= k && matrix[mid][midLen] >= k) {
//       let findIndex = binarySearch(matrix[mid], k);
//       if (findIndex >= 0) {
//         return [mid, findIndex];
//       } else start--;
//     } else if (matrix[mid][midLen] > k) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

// function binarySearch(arr, k) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = start + Math.floor((end - start) / 2);
//     if (arr[mid] == k) {
//       return mid;
//     } else if (arr[mid] < k) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// }

function striaCase(matrix, k) {
  let i = matrix.length - 1;
  let j = 0;
  while (j < matrix.length && i >= 0) {
    if (matrix[i][j] == k) {
      break;
    } else if (matrix[i][j] < k) {
      j++;
    } else {
      i--;
    }
  }
  return [i, j];
}

console.log(
  striaCase(
    [
      [0, 4, 9],
      [1, 5, 10],
      [2, 7, 11],
    ],
    4
  )
);
