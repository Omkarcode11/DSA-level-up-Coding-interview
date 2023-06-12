class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}


function findHeight(root) {
    if (root == null) {
        return 0
    }

    let lr = findHeight(root.right)
    let rr = findHeight(root.left)

    return 1 + Math.max(lr, rr)

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


console.log(findHeight(root))


