function redundantParentheses(str) {
  let st = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] != ")") {
      st.push(str[i]);
    } else {
      //')'
      let ope = false;
      while (st.length > 0 && st.at(-1) != "(") {
        let top = st.at(-1);

        if (top === "+" || top == "*" || top == "/" || top == "-") {
          ope = true;
        }
        st.pop();
      }
      st.pop();

      if (ope == false) {
        return true;
      }
    }
  }
  return false;
}

console.log(redundantParentheses('(((a+b)+c)) + (d*e)'))