const { insertion, inOrder } = require("./BinarySearchTree")

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}


let diff = Infinity
let closest = 0

function findClosestBst(root, data) {
    if (root == null) {
        return diff
    }

    if (Math.abs(root.data - data) < diff) {
        diff = Math.abs(root.data - data)
        closest = root.data
    }
    if (root.data > data) {
        findClosestBst(root.left, data)
    } else {
        findClosestBst(root.right, data)
    }

}


function findClosetBSTs(root, data) {
    let diff = Number.MAX_VALUE
    let closeNode;
    let newRoot = root

    while (newRoot != null) {

        if(newRoot.data==data)return newRoot.data

        if (Math.abs(newRoot.data - data) < diff) {
            diff = Math.abs(newRoot.data - data)
            closeNode = newRoot.data
        }

        if (newRoot.data > data) newRoot = newRoot.left
        else newRoot = newRoot.right
    }
    return closeNode
}







let root = new Node(10)
insertion(root, 14)
insertion(root, 54)
insertion(root, 64)
insertion(root, 34)
insertion(root, 24)
insertion(root, 13)
insertion(root, 19)

// inOrder(root)
console.log(findClosetBSTs(root, 19))
// console.log(closest)