// Mountain
// Write a function that takes input an array of distinct
// integers, and returns the length of highest mountain.
// • A mountain is defined as adjacent integers that are
// strictly increasing until they reach a peak, at which the
// become strictly decreasing.
// • At least 3 numbers are required to form a mountain.

// function maxMountain(arr) {
//   let count = 1;
//   let maxAres = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//       let j = i;
//       while (arr[j - 1] < arr[j]) {
//         count++;
//         j--;
//       }
//     } else if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
//       count++;
//       maxAres = Math.max(count, maxAres);
//       count = 1;
//     } else if (arr[i] < arr[i + 1]) {
//       count++;
//     }
//   }

//   return maxAres;
// }

// Approach 2
function maxMountain(arr) {
  let n = arr.length;
  let largest = 0;
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      //do some work
      let count = 1;
      // count backwards
      let j = i;
      while (j >= 1 && arr[j] > arr[j - 1]) {
        j--;
        count++;
      }
      while (i <= n - 2 && arr[i] > arr[i + 1]) {
        i++;
        count++;
      }
      largest = Math.max(largest, count);
    } 
  }
  return largest;
}

console.log(maxMountain([5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4]));
