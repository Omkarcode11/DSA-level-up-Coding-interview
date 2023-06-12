class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  return isBalancedTree(root).second;
}

function isBalancedTree(root) {
  let p = {};
  if (root == null) {
    p.first = 0;
    p.second = true;
    return p;
  }

  let ls = isBalancedTree(root.left);
  let rs = isBalancedTree(root.right);

  p.first = 1 + Math.max(ls.first + rs.first);

  if (Math.abs(ls.first - rs.first) <= 1 && ls.second && rs.second) {
    p.second = true;
    return p;
  } else {
    p.second = false;
    return p;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5)
root.left.left.left = new Node(6);
root.right = new Node(3);

console.log(isBalanced(root));
