function generateBrackets(n, i = 0, l = 0, r = 0, str = "", res = []) {
     if (r==n && l==n) {
         res.push(str);
         return;
        }
    if(l>n || r>n)return 

  if (l <= i ) {
    generateBrackets(n, i + 1, l + 1, r, str + "(", res);
  }

  if (r < l ) {
    generateBrackets(n, i + 1, l, r+1, str + ")", res);
  }

  return res;
}

console.log(generateBrackets(5));


function isValid(str){
  if(str.length%2==1)return false
  let st = []
  for (let i = 0; i < str.length; i++) {
      if(str[i]=='('){
        st.push(str[i])
      }else{
        if(st.at(-1)=='(' && str[i]==')'){
          st.pop()
        }else{
          return false
        }
      }
  }
  if(st.length==0)return true
  return false
}

// console.log(isValid('()(()(()))'));
