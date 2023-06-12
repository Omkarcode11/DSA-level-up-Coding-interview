// Check Subsets
// Given two non-empty strings, write a function that
// determines whether the second string is subsequence of
// first one.
// Sample Input
// codingminutes
// cines
// Sample Output
// Yes

function isSubset(str, sub) {
  let subI = 0;
  for (let i = 0; i < str.length; i++) {
    if (sub[subI] == str[i]) {
      subI++;
    }
  }
  if (subI == sub.length) {
    return true;
  }
  return false;
}

console.log(isSubset("codingminutes", "ciae"));
