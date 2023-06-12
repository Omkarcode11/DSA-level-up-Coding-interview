class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var levelOrder = function (root) {
  let res = [];
  if (root == null) return res;
  if (root.left == null && root.right == null) return [[root.val]];

  let qu = [root, "*"];
  let tempArr = [];
  while (qu.length > 0) {
    let temp = qu.shift();
    if (temp == "*") {
      res.push(tempArr);
      tempArr = [];
      if (qu.length == 0) return res;
      else qu.push("*");
    } else {
      tempArr.push(temp.val);
      if (temp.left != null) qu.push(temp.left);
      if (temp.right != null) qu.push(temp.right);
    }
  }
  return res;
};

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.right = new Node(15);
root.left.left = new Node(7);

console.log(levelOrder(root));
