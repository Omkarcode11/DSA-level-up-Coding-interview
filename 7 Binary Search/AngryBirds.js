// Angry Birds
// there is a long wire along at straight line which contains N bird nests a positions X1,X2,...XN

// Where are BarProp(B<=N) birds, which become angry towards each other once put into a nest to put the birds from hurting each other you want to assign birds to nests such that minimum distance between any two birds is as larger as possible what is the largest minimum distance?

// Input
// N= 5
// B = 3 Birds
// Wire = [1,2,4,8,9]

// OutPut
// 3

function angryBird(arr, k) {
  let start = 0;
  let end = arr[arr.length - 1] - arr[0];
  let ans = 0;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isPossible(arr, k, mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

function isPossible(arr, k, dist) {
  let count = 1;
  let startInd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[startInd] >= dist) {
      count++;
      startInd = i
    }
  }
  if (count >= k) return true;
  else return false;
}

console.log(angryBird([1, 2, 4, 8, 9], 3));
