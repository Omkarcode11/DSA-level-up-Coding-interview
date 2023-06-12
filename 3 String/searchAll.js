// Implement a function that returns a list of all occurrences of a given  substring inside a big string.
// Return empty vector if smaller string is not present inside bigger string.

// Sample Input

// string bigString = "I liked the movie, acting in movie was great!";
// string smallString = "movie"

// Sample Output
// 12, 29

function searchAll(str, subStr) {
  let count = 0;
  let len = subStr.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == subStr[0]) {
      let j = 0;
      while (i<str.length&&subStr[j] == str[i]) {
        j++;
        i++;
      }
      if (j == len) {
        count++;
      }
    }
  }
  return count;
}

console.log(
  searchAll("I liked the movie, acting in movie was great! movie", "movie")
);
