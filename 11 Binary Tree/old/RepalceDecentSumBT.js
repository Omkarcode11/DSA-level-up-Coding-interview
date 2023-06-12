class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function replaceDecantSum(root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return root.data;

  let ls = replaceDecantSum(root.left);
  let rs = replaceDecantSum(root.right);

  let temp = root.data;

  root.data = ls + rs;

  return root.data + temp;
}

function printLevelOrder(root) {
  if (root == null) return null;
  if (root.left == null && root.right == null) return root.data;

  let qu = [root, "*"];
  let str = "";
  while (qu.length) {
    let temp = qu.shift();
    if (temp == "*") {
      if (qu.length == 0) {
        return str;
      }
      qu.push("*");
      str += "\n";
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
root.left.right = new Node(5);
root.left.right.left = new Node(7);
root.left.left = new Node(4);

console.log(printLevelOrder(root));
console.log(replaceDecantSum(root));
console.log(printLevelOrder(root));