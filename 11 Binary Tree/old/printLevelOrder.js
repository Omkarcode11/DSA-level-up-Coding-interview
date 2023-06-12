class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

 function printLevelOrder(root) {
  if (root.data == null) return root;
  if (root.left == null && root.right == null) return root;
  let str = "";

  let qu = [root, "*"];

  while (qu.length) {
    let temp = qu.shift();
    if (temp == "*") {
      if (qu.length == 0) {
        return str;
      } else {
        str += "\n";
        qu.push("*");
      }
    } else {
      str += temp.data;
      if (temp.left != null) qu.push(temp.left);
      if (temp.right != null) qu.push(temp.right);
    }
  }
  return str;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(6);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(7);

console.log(printLevelOrder(root));
