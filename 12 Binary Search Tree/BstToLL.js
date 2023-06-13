const { inOrder } = require("./BinarySearchTree")

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}

class List {
    constructor(data) {
        // this.data = data
        this.head = null
        this.tail = null
    }
}

let root = new Node(4)
root.left = new Node(2)
root.left.left = new Node(1)
root.left.right = new Node(3)
root.right = new Node(6)
root.right.left = new Node(5)
root.right.right = new Node(7)

// inOrder(root)



function BstToLL1(root) {
    let list = new List()
    if (root == null) {
        list.head = list.tail = null
        return list
    }
    if (root.left == null && root.right == null) {

        list.head = list.tail = root

    } else if (root.left != null && root.right == null) {
        let leftLL = BstToLL(root.left)

        leftLL.tail.right = root

        list.head = leftLL.head
        list.tail = root
    }
    else if (root.left == null && root.right != null) {

        let rightLL = BstToLL(root.right)

        root.right = rightLL.head

        list.head = root
        list.tail = rightLL.tail
    } else {

        let rightLL = BstToLL(root.right)

        let leftLL = BstToLL(root.left)

        leftLL.tail.right = root
        root.right = rightLL.head

        list.head = leftLL.head
        list.tail = rightLL.tail
    }

    return list
}

function BstToLL(root) {
    let list = {}

    if (root == null) {
        list.head = list.tail = null
        return list
    }
    if (root.left == null && root.right == null) {
        list.head = list.tail = root
    } else if (root.left != null && root.right == null) {
        let leftLL = BstToLL(root.left)

        leftLL.tail.right = root

        list.head = leftLL.head
        list.tail = root

    } else if (root.left == null && root.right != null) {

        let rightLL = BstToLL(root.right)

        root.right = rightLL.head

        list.head = root
        list.tail = rightLL.tail

    } else if (root.left != null && root.right != null) {
        let leftLL = BstToLL(root.left)
        let rightLL = BstToLL(root.right)

        leftLL.tail.right = root
        root.right = rightLL.head

        list.head = leftLL.head
        list.tail = rightLL.tail
    }

    return list

}


printLL(BstToLL(root))


function printLL(LL) {
    let temp = LL.head
    while (temp) {
        console.log(temp.data)
        //   console.log(temp) 
        temp = temp.right
    }
}