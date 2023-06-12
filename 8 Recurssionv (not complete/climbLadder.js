function climbingStair(n) {
  if (n < 0) {
    return 0;
  }
  if(n==0){
    return 1
  }

  return climbingStair(n - 1) + climbingStair(n - 2) + climbingStair(n - 3);
}

console.log(climbingStair(4));
