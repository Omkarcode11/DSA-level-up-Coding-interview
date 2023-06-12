class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findDiameter(root){
  let diameter = 0
  const height = (root)=>{
    if(root==null)return 0

    let ls = height(root.left,diameter)
    let rs = height(root.right,diameter)

    diameter = Math.max(diameter,ls+rs)

    return 1 + Math.max(ls,rs)
  }
  height(root,diameter)
  return diameter
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(6);
root.right.left.left = new Node(5);
root.right.right.right = new Node(7);
root.right.left.left.left = new Node(9);
root.right.right.right.right = new Node(8);

console.log(findDiameter(root));
