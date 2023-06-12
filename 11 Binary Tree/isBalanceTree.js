class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}


function isBalanceTree(root) {
    if (root == null) {
        return [true, 0]
    }

    let lr = isBalanceTree(root.left)
    let rr = isBalanceTree(root.right)


    

    let ans = []

    ans[1] = 1 + Math.max(rr[1], lr[1])

    if (rr[0] && lr[0] && Math.abs(lr[1] - rr[1]) <= 1) {
        ans[0] = true
        return ans
    } else {
        ans[0] = false
        return ans
    }

}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
// root.left.right = new Node(5)
// root.left.left.left = new Node(6);
root.right = new Node(3);

console.log(isBalanceTree(root))