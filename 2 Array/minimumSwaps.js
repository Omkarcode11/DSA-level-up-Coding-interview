// Min Swaps
// Given an array of size N, find the minimum number of
// swaps needed to make the array as sorted.
// Sample Input
// al = [5,4,3,2,1]
// Sample Output
// 2

function minSwaps(arr) {
  let count = 0;
  let arr1 = new Array(...arr);
  let sortArr = new Array(...arr.sort((a, b) => a - b));
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (map[sortArr[i]]) {
      map[sortArr[i]].push(i);
    } else {
      map[sortArr[i]] = [i];
    }
  }
  let i = 0;
  while (i < arr.length) {
    if (arr1[i] == sortArr[i]) {
      i++;
    } else {
      let index = map[arr1[i]];
      if (index.length == 1) {
        let temp = arr1[i];
        arr1[i] = arr1[index[0]];
        arr1[index[0]] = temp;
        index.pop();
      } else {
        let n = index.length;
        let temp = arr1[i];
        arr1[i] = arr1[index[n - 1]];
        arr1[index[n - 1]] = temp;
        index.pop();
      }
      count++;
    }
  }
  console.log(arr1);
  return count;
}

console.log(minSwaps([10, 11, 5, 4, 3, 2, 1,1,5,2]));
console.log(minSwaps([2,4,5,1,3]));
