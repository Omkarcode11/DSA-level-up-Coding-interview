// Housing
// Along one side of a road there is a sequence of vacant
// plots of land. Each plot has a different area (non-zero). So,
// the areas form a sequence  A [2], ... A[N].
// You want to buy K acres of land to build a house. You want
// to find all segments of continuous plots (i.e., a subsection
// in the sequence) of whose sum is exactly K.

function housing(arr, k) {
  let i = 0;
  let j = 0;
  let res = [];
  let sum = 0;
  while (j < arr.length) {
    if (sum < k) {
      sum += arr[j];
      j++;
    } else if (sum > k) {
      sum -= arr[i]
      i++
    }else{
      res.push([i,j-1])
      sum -= arr[i]
        i++
    }
  }
  if(sum>k){
    while(i<arr.length){
      if(sum==k){
        res.push([i,j-1])
        sum -= arr[i]
        i++
      }else{
        sum -= arr[i]
        i++
      }
    }
  }
  return res
}
                 //  0 1 2 3 4 5 6 7 8 9 10
console.log(housing([1,3,2,1,4,1,3,2,1,1,7],8))
