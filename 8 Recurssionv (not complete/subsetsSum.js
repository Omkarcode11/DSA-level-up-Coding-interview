// function subSetSum(arr, k, i, count, tempSum) {
//   if (i == arr.length) {
//     if (tempSum == k) {
//       // console.log('comking hderer')
//       return 1;
//     }
//     return 0;
//   }

//   let inc = subSetSum(arr, k, i + 1, count, tempSum);
//   tempSum += arr[i];
//   //   console.log(count);

//   let inc2 = subSetSum(arr, k, i + 1, count, tempSum);

//   return inc + inc2;
// }
// console.log(subSetSum([10, 12, 15, 6, 19, 20], 16, 0, 0, 0));

function countSubsets(arr, i, x) {
  if (i == arr.length) {
    if (x == 0) {
      return 1;
    }
    return 0;
  }

  let inc = countSubsets(arr, i + 1, x - arr[i]);
  let exc = countSubsets(arr, i + 1, x);

  return inc + exc;
}
console.log(countSubsets([10, 12, 15, 6, 19, 20], 0, 16));
console.log(countSubsets([1,2,3,4,5], 0, 6));
