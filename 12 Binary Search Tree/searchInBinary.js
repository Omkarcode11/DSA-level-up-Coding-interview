const { insertion, inOrder } = require("./BinarySearchTree")




class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

let = searchNodeInBinary = (root, target) => {
    let bool = false
    if (root == null) {
        return bool
    }

    if (root.data == target) {
        bool = true
        return bool
    }
    if (root.data > target)
        bool = searchNodeInBinary(root.left, target)
    else
        bool = searchNodeInBinary(root.right, target)

    return bool
}

let root = new Node(10)
insertion(root, 23)
insertion(root, 43)
insertion(root, 26)
insertion(root, 63)
insertion(root, 13)
insertion(root, 24)

inOrder(root)
console.log(searchNodeInBinary(root, 63))




