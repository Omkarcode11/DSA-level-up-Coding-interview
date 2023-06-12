class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}


function printAtLevelK(root,k){
    if(root==null)return
    if(k==0){
        console.log(root.data)
        return
    }
    printAtLevelK(root.right,k-1)
    printAtLevelK(root.left,k-1)
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.left.right.left = new Node(7);

printAtLevelK(root,3)