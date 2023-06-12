function generateBrackets(n, open=0 , close =0, i=0, output='') {
  if ((i == n * 2)) {
    console.log(output);
    return output
  }

  if (open < n) {
    generateBrackets(n, open + 1, close, i + 1, output + "(");
  }

  if (close < open) {
    generateBrackets(n, open, close + 1, i + 1, output + ")");
  }
}

console.log(generateBrackets(10));
