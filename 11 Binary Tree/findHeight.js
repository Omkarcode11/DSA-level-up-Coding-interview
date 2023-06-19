class Node {
    constructor(data) {
        this.data = null
        this.left = null
        this.right = null

    }
}


function findHeight(root) {
    if (root == null) {
        return 0
    }

    let lr = findHeight(root.left)
    let rr = findHeight(root.right)

    return 1 + Math.max(lr, rr)

}