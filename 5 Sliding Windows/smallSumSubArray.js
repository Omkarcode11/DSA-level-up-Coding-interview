function kThSmallSumSubArr(arr, k) {
  let i = 0;
  let j = 0;
  let ans = [];
  let min = Number.MAX_VALUE;
  let sum = 0;
  while (j < arr.length) {
    if(sum==0){
       i = j
    }
    if (sum == k) {
      let area = j - i;
      if (min > area) {
        ans = [i, j-1 ];
        min = area;
      }
      sum -= arr[i];
      i++;
    } else if (sum < k) {
      sum += arr[j];
      j++;
    } else {
      sum -= arr[i];
      i++;
    }
  }
  if (sum > k) {
    while (i < j) {
      if (sum == k) {
        let area = j - 1 - i;
        if (area < min) {
          res = [i, j-1 ];
        }
      }
      sum -= arr[i];
      i++;
    }
  }
  return ans;
}

//                             0   1  2   3  4   5  6  7   8  9
console.log(kThSmallSumSubArr([1, -4, 4, -1, 4, -1, 3, 2, -1, 1], 8));
