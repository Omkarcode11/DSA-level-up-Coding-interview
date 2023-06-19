
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


let root = new Node(10)


function insertion(root, data) {
    if (root == null) {
        return new Node(data)
    }

    if (root.data > data) {
        root.left = insertion(root.left, data)
        return root
    } else {
        root.right = insertion(root.right, data)
        return root
    }
}

function print1(root) {
    if (root == null) {
        return
    }

    print1(root.left)
    console.log(root.data);
    print1(root.right)

}

function closest(root, data, dif = Infinity, value = 0) {
    if (root == null) {
        return value
    }

    if (root.data == data) return value = data

    if (dif > Math.abs(root.data - data)) {
        value = root.data
        dif = Math.abs(root.data - data)
    }

    if (root.data > data) {
    return  value= closest(root.left, data, dif, value)

    } else {
    return  value=  closest(root.right, data, dif, value)
    }
    // return value
}


insertion(root, 12)
insertion(root, 2)
insertion(root, 22)
insertion(root, 1)
insertion(root, 19)
insertion(root, 99)
print1(root)
console.log(closest(root, 1))
