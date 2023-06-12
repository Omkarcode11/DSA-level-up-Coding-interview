// Square Roots
// Given an integer N and an integer P, you need find the
// square root of number N upto P places. Do it without using a library function.
// Input Array:
// N = 10, P = 3
// Output: 3.162

function squareRoot(num,P) {
  let start = 0;
  let end = num;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let multi = mid*mid
    if (multi == num) {
      return mid;
    } else if (multi>num) {
        end = mid-1
    }else{
        start  =mid+1
    }
  }
  let ans = end
  let inc = 0.1
  for (let i = 0; i <P ; i++) {
       while(ans*ans<num){
        ans = (parseFloat(ans)+parseFloat(inc)).toFixed(P)
       }
       ans = (ans-inc).toFixed(P)
       inc /= 10
  }
  return ans
}

console.log(squareRoot(20,4))