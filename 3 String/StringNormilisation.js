// String Normalisation
// You are given a sentence with words separated by spaces.

// Your task is to:

// Write a function that returns a copy of this sentence where all the words:

// start with a capital letter

// the rest of the letters are lower case

// Note:

// Your function should not modify the sentence given as argument.

// Sample Input

// This is SO MUCH FUN!
// Sample Output

// This Is So Much Fun!

function normalize(str) {
  str = str.split("");
  str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join("");
  // return str
}
5;
console.log(normalize("THIS is SO MucH fUN!"));
