class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}



function arrToBst(arr, root = null) {
    if (arr.length == 0) {
        return root
    }
    let mid = Math.floor(arr.length / 2)
    root = new Node(arr[mid])

    root.left = arrToBst(arr.slice(0, mid), root.left)
    root.right = arrToBst(arr.slice(mid + 1), root.right)

    return root
}


let arr = [1, 2, 3, 4, 5]


console.log(arrToBst(arr))