// Sparse Search
// Given a sorted array of strings that is
// interspersed with empty strings, write a method
// to find the location of a given string.
// Input
// ["ai", "", "","bat", "","","car","cat"",","","dog",""]
// bat
// Output
// 4

function spareSearch(arr, str) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == str) return mid;
    else if (arr[mid] == "") {
      let k = mid;
      while (arr[mid] == "" && arr[k] == "") {
        mid++;
        k--;
      }
      if (arr[k] != "" && arr[mid] == "") mid = k;
      if (arr[mid] == str) return mid;
      else if (arr[mid] < str) start = mid + 1;
      else end = mid - 1;
    } else if (arr[mid] < str) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

console.log(
  spareSearch(
    ["ai", "", "", "bat", "", "", "car", "cat", "", "", "dog", ""],
    "ai"
  )
);
