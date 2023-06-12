function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}
function mergeSort(arr, start = 0, end = arr.length) {
  if (arr.length == 1) return arr;
  let mid = start + Math.floor((end - start) / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
}

console.log(
  mergeSort([
    4,
    6,
    3,
    1,
    5,
    3456,
    34,
    34,
    6234,
    5133,
    434,
    523,
    535,
    6745,
    756,
    223,
    4324,
    4647,
    234,
    23,
    534,
    534,
    5343,
    4,
    56,
    7,
    344,
    5,
  ])
);
