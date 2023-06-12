// Inversion Count
// Given an array containing integers, you need to count the
// total number of inversions.
// Inversion Two elements a[i] and a[j] form an inversion if
// a[i] > a[j] and i <j.
// Sample Input
// [0,5,2,3,1]
// Sample Output
// 5

function inversionCount(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return 0;
  }
  let mid = Math.floor((start + end) / 2);
  let left = inversionCount(arr, start, mid);
  let right = inversionCount(arr, mid + 1, end);
  let leftRight = mergeArray(arr, start, end);
  return left + right + leftRight;
}

function mergeArray(arr, start, end) {
  let mid = Math.floor((start + end) / 2);
  let i = start;
  let j = mid + 1;
  let temp = [];
  let count = 0;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) temp.push(arr[i++]);
    else {
      count += mid - i + 1;
      temp.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) temp.push(arr[i++]);

  while (j <= end) temp.push(arr[j++]);

  let ind = 0;
  for (let i = start; i <= end; i++) arr[i] = temp[ind++];
  return count
}


console.log(inversionCount([0,5,2,3,1]))