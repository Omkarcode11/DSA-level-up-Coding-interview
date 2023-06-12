function stockSpan(arr) {
  let st = [];
  let res = new Array(arr.length).fill(null);
  for (let i = 0; i < arr.length; i++) {
    while (arr[st.at(-1)] <= arr[i]) {
      st.pop();
    }
    if (st.length > 0) res[i] = st.at(-1);
    st.push(i);
  }

  for(let i = 0 ; i <arr.length ; i++){
     res[i] = (i - res[i]) 
  }

  return res

}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
