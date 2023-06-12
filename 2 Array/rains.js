// Give n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining

function rain(arr) {
  let n = arr.length
  if(n<= 2)return 0
  let lArr = new Array(n).fill(arr[0]);
  let rArr = new Array(n).fill(arr[n-1]);
//   let max = arr[0];
  let sum = 0 
  for (let i = 1; i < arr.length; i++) {
    lArr[i] = Math.max(lArr[i-1], arr[i]);
    rArr[n-i-1] = Math.max(rArr[n-i], arr[n-i-1]);
    // max = lArr[i];
  }
//   for (let i = arr.length - 2; i >= 0; i--) {
//     max = rArr[i];
//   }
  for (let i = 0; i < arr.length; i++) {
    sum  += Math.min(lArr[i],rArr[i]) - arr[i]
    
  }
  return sum
}

console.log(rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
