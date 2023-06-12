function isValidParen(str) {
  let st = [];
  let map = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      st.push(str[i]);
    } else if (map[str[i]]) {
      if (map[str[i]] == st.at(-1)) {
        st.pop();
      } else {
        return false;
      }
    }
  }
  if(st.length>0){
    return false
  }

  return true
}


console.log(isValidParen('[((a+b)*d)-]'))
console.log(isValidParen('((a+b)-d)+(g)*h)'))