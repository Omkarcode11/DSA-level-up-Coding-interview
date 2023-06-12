function frequencyCountK(arr, k) {
  lastOccur = lastOccurrence(arr, k);
  let firstOccur;
  if (lastOccur) {
    firstOccur = firstOccurrence(arr, k);
  } else {
    return -1;
  }

  return lastOccur - firstOccur;
}
console.log(frequencyCountK([0, 1, 1, 2, 3, 3, 3, 3, 4, 5, 5, 5, 10], 3));

function firstOccurrence(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == k) {
      ans = mid;
      end = mid - 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}
function lastOccurrence(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == k) {
      ans = mid;
      start = mid + 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans + 1;
}
