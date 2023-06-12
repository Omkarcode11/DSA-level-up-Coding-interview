class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}


function printDownwards(root, k) {
    if (root == null) {
        return
    }
    if (k == 0) {
        return console.log(root.data)
    }
    printDownwards(root.left, k - 1)
    printDownwards(root.right, k - 1)
}


function printAtLevelK(root, target, k) {
    if (root == null) {
        return -1
    }
    if (root == target) {
        printDownwards(root, k)
        return 0
    }

    let lr = printAtLevelK(root.left, target, k)

    if (lr != -1) {

        if (lr + 1 == k) {
            console.log(root.data)
        } else {
            printDownwards(root.right, k - 2 - lr)
        }
        return 1 + lr
    }

    let rr = printAtLevelK(root.right, target, k)

    if (rr != -1) {

        if (rr + 1 == k) {
            console.log(root.data)
        } else {
            printDownwards(root.left, k - 2 - rr)
        }
        return 1 + rr
    }
    return -1
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.left.right.left = new Node(7);


console.log(printAtLevelK(root,root.left.right,2))

