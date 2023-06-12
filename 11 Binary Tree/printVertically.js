class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

let obj = {}

function printVertically(root, value = 100000) {
    if (root == null) {
        return
    }

    if (obj[value]) {
        obj[value].push(root.data)
    } else {
        obj[value] = [root.data]
    }

    printVertically(root.right, value + 1)
    printVertically(root.left, value - 1)

}


let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.right = new Node(15);
root.left.left = new Node(7);

printVertically(root)

console.log(Object.values(obj))