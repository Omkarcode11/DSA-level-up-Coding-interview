// Subarray Sort
// Given an array of size at-least two, find the smallest
// subarray that needs to be sorted in place so that entire
// input array becomes sorted.
// If the input array is already sorted, the function should
// return [-1,-1], otherwise return the start & end index of
// smallest subarray.
// Sample Input
// al = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11]
// Sample Output
// [5,7]

function subArraySort(arr) {
  let index = [-1, -1];
  let dist = 0;
  let startI = 0;
  let endI = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      startI = i;
      let j = i;
      while (arr[j] > arr[j + 1]) j++;
      endI = ++ j;
      if (endI - startI > dist) {
        dist = endI - startI;
        index = [startI, endI];
      }

    }
  }
  return index;
}
                    //    0  1  2  3  4  5  6  7   8  9  10
console.log(subArraySort([1, 2, 3, 4, 5, 6, 7, 10, 8, 9, 11]));
