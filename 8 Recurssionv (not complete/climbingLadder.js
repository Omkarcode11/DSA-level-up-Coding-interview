function climbingLadder(n) {
  if (n==0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }

  return climbingLadder(n - 1) + climbingLadder(n - 2) + climbingLadder(n - 3);
}

console.log(climbingLadder(5));
