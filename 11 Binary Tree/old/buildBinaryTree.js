class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let arr = [1, 2, 3, 4, 5, -1, 6, -1, -1, 7, -1, -1, -1, -1, -1];

function buildTree(arr) {
  let root = new Node(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    addNode(root, arr[i], arr[i + 1]);
  }
  return root;
}

function addNode(root, data, data2) {
  let qu = [root];
  let data1Add = false;
  let data2Add = false;

  while (qu.length) {
    let temp = qu.shift();

    if (data != -1) {
      if (temp.left == null) {
        temp.left = new Node(data);
        data1Add = true;
      } else qu.push(temp.left);
    }

    if (data2 != -1) {
      if (temp.right == null) {
        temp.right = new Node(data2);
        data2Add = true;
      } else qu.push(temp.right);
    }
    if (data1Add && data2Add) break;
  }
}

function inOrder(root) {
  if (root == null) return;

  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}

export function printLevelOrder(root) {
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

let bt = buildTree(arr);

// console.log(printLevelOrder(bt));
