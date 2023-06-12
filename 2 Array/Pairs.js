// Pairs

// Given an array containing N integers and an numbers S denoting a target sum
// find two distinct integers that can pair op to form target sum
//  array = [10,5,2,3,-6,11] S = 4
// ans [10,-6]

function twoSum(arr, sum) {
  let map = {};
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]]--;
    let target = sum - arr[i];
    if (map[target]) {
      pairs.push([arr[i], target]);
    } else {
        map[arr[i]]++;
    }
  }
  return pairs;
}

console.log(twoSum([10, 5, 2, 3, -6, 9, 11, 1], 22));
