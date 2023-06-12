function LongestBand(arr) {
  let map = new Map();
  let res = [];
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map[arr[i]]++;
    } else {
      map.set(arr[i],1)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i] - 1)) {
      let curr = arr[i];
      let tempArr = [];
      let tempLen = 0;
      while (map.has(curr)) {
        tempArr.push(curr);
        tempLen++;
        curr++;
      }
      res.push(tempArr);
      len = Math.max(tempLen, len);
    }
  }
  return len;
}

console.log(LongestBand([1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6]));
