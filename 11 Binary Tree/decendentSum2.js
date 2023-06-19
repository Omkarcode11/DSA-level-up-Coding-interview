class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}



function descendantSum2(root) {
    if (root == null) {
        return 0
    }
    if (root.left == null && root.right == null) {
        return root.data
    }

    let lr = descendantSum2(root.left)
    let rr = descendantSum2(root.right)

    let temp = root.data
    root.data = lr + rr

    return temp + root.data

}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(6);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(7);


console.log(descendantSum2(root))