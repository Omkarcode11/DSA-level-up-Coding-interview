const { inOrder } = require("./BinarySearchTree")

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}



function insert(root, data) {
    if (root == null) {
        return new Node(data)
    }

    if (root.data > data) {
        root.left = insert(root.left, data)
    } else {
        root.right = insert(root.right, data)
    }

    return root
}

let root = new Node(Infinity)

insert(root,10)
insert(root,20)
insert(root,50)
insert(root,1)
insert(root,38)
insert(root,8)

inOrder(root)