// Minimum Difference
// Implement a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) who absolute difference is closest to zero, and returns a pair containing these two numbers, with the first number from array. Only one such pair will exist for the test.

// Input

// Array1 = [23, 5, 10, 17, 30]
// Array2 = [26, 134, 135, 14, 19]
// Output

// 17,19

// function minimumDifference(arr1,arr2){
//     let minDiff = Number.MAX_VALUE
//     let pair = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             let cal = Math.abs(arr1[i]-arr2[j])
//             if(minDiff>cal){
//                pair = [arr1[i],arr2[j]]
//                minDiff = cal
//             }
//         }
//     }
//     return pair
// }
function minimumDifference(arr1, arr2) {
  arr2.sort((a, b) => a - b);
  let minDiff = Number.MAX_VALUE;
  let pair = [];
  for (let i = 0; i < arr1.length; i++) {
    let start = 0;
    let end = arr2.length - 1;
    while (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      if (start + 1 == end) {
        let cal1 = Math.abs(arr2[end]-arr1[i])
        let cal2 = Math.abs(arr2[start]-arr1[i]) 
        if(cal1<cal2){
            if (cal1 < minDiff) {
                minDiff = cal1;
                pair = [arr1[i], arr2[end]];
              }
            }else{
            if (cal2 < minDiff) {
                minDiff = cal2;
                pair = [arr1[i], arr2[start]];
              }

        }
        break

      } else if (arr2[mid] < arr1[i]) {
          start = mid 
    } else {
        end = mid 
      }
    }
    
  }
  return pair;
}

console.log(minimumDifference([23, 5, 10, 17, 30], [26, 134, 135, 14, 11]));
