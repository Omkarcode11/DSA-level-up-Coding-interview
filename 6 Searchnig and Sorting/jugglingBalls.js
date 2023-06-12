// Juggling Balls
// Given an array containing balls of Red, Blue and Green Color in a random order. Your goal is to arrange these balls in sorted order - Red Balls, followed by Blue and then Green Balls. Red balls are denoted using number 0, Blue using 1 and Green using 2.

// Note: Try to solve the problem in a single scan of the array without using extra space.

// Hint - read about DNF Algorithm.

// Input

// {0, 0, 1, 2, 0, 1, 2, 0}
// Output

// {0, 0, 0, 0, 1, 1, 2, 2}

function JugglingBalls2(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 0) {
      i++;
    } else if (arr[i] == 2 && arr[j] != 2) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
    if (arr[j] == 2) {
      j--;
    } else if (arr[j] == 0 && arr[i] != 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    } else if (arr[i] == 1 && arr[j] == 1) {
      let k = i;
      while (arr[k] == 1) {
        k++;
      }
      if (k >= j) break;
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  }
  return arr;
}

function JugglingBalls(arr) {
  let n = arr.length;
  let start = 0;
  let end = n - 1;
  let mid = 0;
  while (mid <= end) {
    if (arr[mid] == 0) {
      [arr[start], arr[mid]] = [arr[mid], arr[start]];
      start++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[end]] = [arr[end], arr[mid]];
      end--;
    }
  }
  return arr;
}

console.log(JugglingBalls([0, 0, 1, 1, 2, 1, 2, 0]));
// console.log(JugglingBalls2([0, 0, 1, 1, 2, 1, 2, 0]));
