class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


function findBtHeight(root){
    if(root==null)return 0

    let lh = findBtHeight(root.left)
    let rh = findBtHeight(root.right)

    return 1 + Math.max(lh,rh)
}

let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.left.left.left = new Node(6)
root.right = new Node(3)


console.log(findBtHeight(root))