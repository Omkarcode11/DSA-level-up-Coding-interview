// Game of Greed
// You are playing a game with your 'k' friends. You have an array of N coins, at each index i you have a coin of value a[i].
// Your task is to divide the coins, among a group of K friends by doing consecutive segments (k-subArrays) of the array.
// Each friend will get a total sum of the coins in that subarray. Since all your friends are greedy, and they will pick the largest k-1 segments and you will get the smallest segment. Find out the maximum value you can make by making an optimal partition.
// Note : The coins array may or may not be sorted!
// (Refer Hints at the end if needed)
// Input
// K = 3
// coins = {1,2,3,4};
// Output
// 3
// Explanation
// The ideal partition looks like this -
// {1 + 2} = 3
// {3} = 3
// {4} = 4
// You will get a maximum of 3 coins in the best case.

function gameOfGreed(arr, k) {
  let start = arr[0];
  let end = arr.reduce((a, b) => a + b);
  let ans = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isEqualCoin(arr, k, mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

function isEqualCoin(arr, k, dis) {
  let count = 0;
  let sum = 0;
  let i;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= dis) {
      count++;
      sum = arr[i];
    }
  }
  return count >= k

}

console.log(gameOfGreed([1, 2, 3, 4], 3));
