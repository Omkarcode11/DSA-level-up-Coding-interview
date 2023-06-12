class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function isHeightBalanced(root) {
  let p = {};
  if (root == null) {
    p.fist = 0;
    p.second = true;
    return p;
  }

  //rec case

  let left = isHeightBalanced(root.left);
  let right = isHeightBalanced(root.right);

  p.fist = Math.max(left.fist, right.fist) + 1;

  if (Math.abs(left.fist - right.fist) <= 1 && left.second && right.second) {
    p.second = true;
    return p;
  }
  p.second = false;
  return p;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(6);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(5);
root.left.right.right.right = new Node(5);
root.left.right.left = new Node(7);


console.log(isHeightBalanced(root))
