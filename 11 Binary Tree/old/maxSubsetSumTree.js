class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function findMaxSubSetTree(root) {
  let p = {};
  if (root == null) {
    p.exc = 0;
    p.inc = 0;
    return p;
  }

  let ls = findMaxSubSetTree(root.left);
  let rs = findMaxSubSetTree(root.right);

  p.inc = root.data + ls.exc + rs.exc;
  p.exc = Math.max(ls.exc, ls.inc) + Math.max(rs.exc, rs.inc);

  return p;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.left.right.left = new Node(7);

console.log(findMaxSubSetTree(root));
