class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function isBalance(root) {
  let p = {};
  if (root == null) {
    p.first = 0;
    p.second = true;
    return p;
  }

  let ls = isBalance(root.left);
  let rs = isBalance(root.right);

  p.first = 1 + Math.max(ls.first, rs.first);

  if(Math.abs(ls.first-rs.first)<=1 && ls.second && rs.second){
    p.second = true
    return p
  }else{
    p.second = false
    return  p 
  }
}
