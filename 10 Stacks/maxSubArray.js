function maxElementInKSubArray(arr, k) {
  if(k==1)return arr
  let qu = [];
  let res = [];

  for(let i = 0 ; i<k;i++){
      while(arr[qu[0]]<arr[i]){
        qu.shift()
      }
      qu.push(i)
    }
    res.push(arr[qu[0]])

  for (let i = k; i < arr.length; i++) {
    while (qu[0] <= i - k) {
      qu.shift();
    }
    while (arr[qu.at(-1)] < arr[i]) {
      qu.pop();
    }

    
    qu.push(i);
    res.push(arr[qu[0]]);
  }
  return res;
}

// console.log(maxElementInKSubArray([1, 2, 3, 1, 4, 5, 2, 3, 6], 1));
console.log(maxElementInKSubArray([1,3,1,2,0,5], 3));
