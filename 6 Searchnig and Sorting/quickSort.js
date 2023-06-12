function quickSort(arr, start = 0, end = arr.length-1) {
  if (start < end) {
    let pivotIndex = findPivotIndex(arr, start, end);
    quickSort(arr, pivotIndex + 1, end);
    quickSort(arr, start, pivotIndex - 1);
  }
  return arr;
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
  return i;
}

console.log(quickSort([2,5,1,3,65,8,3]))