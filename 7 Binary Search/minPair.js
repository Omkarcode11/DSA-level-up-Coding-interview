//Min Pair

//Given two non-empty array find the pair of numbers (one from each array)whose absolute difference is minimum Print the any one pair with the smallest difference

function minPair(arr1, arr2) {
  arr2.sort((a, b) => a - b);
  let minDist = Number.MAX_VALUE;
  let index = [-1, -1];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[0]) {
      let dist = Math.abs(arr1[i] - arr2[0]);
      if (dist < minDist) {
        index = [arr1[i], arr2[0]];
        minDist = dist;
      }
    } else if (arr1[i] > arr2.at(-1)) {
      let dist = Math.abs(arr1[i] - arr2.at(-1));
      if (dist > minDist) {
        index = [arr1[i], arr2.at(-1)];
        minDist = dist;
      }
    } else {
      let start = 0;
      let end = arr2.length - 1;
      while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr2[mid] > arr1[i] && arr2[mid - 1] < arr1[i]) {
          let dist1 = Math.abs(arr1[i] - arr2[mid]);
          let dist2 = Math.abs(arr1[i] - arr2[mid - 1]);
          if (dist1 < minDist) {
            index = [arr1[i], arr2[mid]];
            minDist = dist1;
          }
          if (dist2 < minDist) {
            index = [arr1[i], arr2[mid - 1]];
            minDist = dist2;
          }
          break
        } else if (arr1[i] > arr2[mid]) start = mid + 1;
        else end = mid - 1;
      }
    }
  }
  return index;
}

console.log(minPair([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]));
