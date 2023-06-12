// Smallest Distinct Window
// Given a string, find the smallest window (substring) which contains all distinct characters of the given input string.

// Sample Inputs

// aabcbcdbcaaad
// aaaa
// Sample Outputs

// dbca
// a
// Explanation : The smallest window is "dbca" as it contains all the distinct letters from input string. Similarly for the second case the answer should be 'a'.

function smallestWindow(str) {
  let i = 0;
  let j = 0;
  let maxLen = 0
  let map = {};
  let index = [];

  while (j < str.length) {
    if (map[str[j]]) {
      if (j - i > maxLen) {
        maxLen = j - i;
        index = [i, j];
      }
      while (map[str[j]]) {
        map[str[i]]--;
        i++;
      }
    } else {
      map[str[j]] = 1;
      j++;
    }
  }
  if(index.length==0)return str
  return str.substring(index[0],index[1])
}


console.log(smallestWindow('aabcbcdbcaaad'))
console.log(smallestWindow('abcdefghijklm'))