function quickSelect(arr, k, start = 0, end = arr.length - 1) {
  if (k > arr.length || k < 0) return -1;
  let pivotIndex = findPivotIndex(arr, start, end);
  if (pivotIndex == k) return arr[pivotIndex];
  else if (pivotIndex > k) return quickSelect(arr, k, start, pivotIndex - 1);
  else return quickSelect(arr, k, pivotIndex + 1, end);
}

function findPivotIndex(arr, start, end) {
  let pivot = arr[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]];
//   console.log(arr)
  return i;
}

console.log(quickSelect([5, 4, 3, 2, 1], 4));
// console.log(findPivotIndex([5, 4, 3, 2, 1], 0,4));
