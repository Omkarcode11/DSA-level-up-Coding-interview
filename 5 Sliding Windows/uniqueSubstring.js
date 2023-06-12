// Unique Substring
// Given a string, write a function to find the largest
// substring with unique characters (no duplicates)
// Sample Input
// prateekbhaiya
// aabcb
// Sample Output
// ekbhaiy
// abc

function uniqueSubstring(str) {
  let i = 0;
  let j = 0;
  let map = {};
  let maxLen = 0;
  let index = [];
  while (j < str.length) {
    if (map[str[j]]) {
      let area = j - 1 - i;
      if (maxLen < area) {
        maxLen = area;
        index = [i, j];
      }
      map[str[i]]--;
      i++;
    } else {
      map[str[j]] = 1;
      j++;
    }
  }
  if (i == 0 && j == str.length && index.length == 0) return str;
  if (index.length == 0) return str[0];
  return str.substring(index[0], index[1]);
}

console.log(uniqueSubstring("prateekbhaiya"));
console.log(uniqueSubstring("aabcb"));
console.log(uniqueSubstring("aaaakaaaa"));
