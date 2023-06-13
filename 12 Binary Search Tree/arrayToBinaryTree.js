const { inOrder } = require("./BinarySearchTree");

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}




function arrayToBinaryTree(arr, root = null) {
    let mid;
    if (arr.length == 0) {
        return root
    }
    if (arr.length % 2 == 0) {
        mid = Math.floor((arr.length - 1) / 2)
    } else {
        mid = Math.floor(arr.length / 2)
    }
    if (root == null) {
        root = new Node(arr[mid])
    }

    root.left = arrayToBinaryTree(arr.slice(0, mid), root.left)
    root.right = arrayToBinaryTree(arr.slice(mid + 1), root.right)


  return root
}

let arr = [1, 2, 3, 4, 5,6,7]

let bt = arrayToBinaryTree(arr)

// inOrder(bt)
// bt