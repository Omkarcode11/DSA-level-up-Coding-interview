class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


function findHeight(root){
    if(root==null)return 0

    let ls = findHeight(root.left)
    let rs = findHeight(root.right)

    return 1 + Math.max(ls,rs)
}


let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.left.left.left = new Node(6)
root.right = new Node(3)


console.log(findHeight(root))