class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}

let insertion = (root, data) => {
    if (root == null) {
        return new Node(data)
    }
    if (root.data > data) {
        root.left = insertion(root.left, data)
    } else {
        root.right = insertion(root.right, data)
    }

    return root

}

let inOrder = (root) => {
    if (root == null) {
        return
    }
    inOrder(root.left)
    console.log(root.data)
    inOrder(root.right)
}


let root = new Node(10)

insertion(root, 20)
insertion(root, 24)
insertion(root, 22)
insertion(root, 50)
insertion(root, 60)
insertion(root, 34)
insertion(root, 53)
insertion(root, 30)
insertion(root, 40)
insertion(root, 12)
insertion(root, 40)

// inOrder(root)









module.exports = {
    insertion,
    inOrder
}