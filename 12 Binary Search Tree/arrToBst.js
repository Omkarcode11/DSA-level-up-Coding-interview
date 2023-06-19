class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7]


function arrToBst(arr, root = null) {
    if (arr.length == 0) {
        return root
    }

    let mid = Math.floor(arr.length / 2)
    root = new Node(arr[mid])

    root.left = arrToBst(arr.slice(0, mid))
    root.right = arrToBst(arr.slice(mid + 1))

    return root

}

function print(root) {
    if (root == null) return

    print(root.left)
    console.log(root.data);
    print(root.right)
}

print(arrToBst(arr))