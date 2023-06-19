class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }
}

let root = new Node(10)
//printing
const  print=(root)=> {
    if (root == null) {
        return
    }

    print(root.left)
    console.log(root.data)
    print(root.right)

}
//insertion 
const insertion = (root, data)=> {
    if (root == null) {
        return new Node(data)
    }
    if (root.data < data) {
        root.right = insertion(root.right, data)
    } else {
        root.left = insertion(root.left, data)
    }
    return root
}
//deletion
function deletion(root, data) {
    if (root == null) return root

    if (root.data == data) {
        if (root.left == null && root.right == null) {
            return null
        } else if (root.left == null) {
            return root.right
        } else if (root.right == null) {
            return root.left
        } else {
            let successor = findSuccessor(root.right)

            root.data = successor

            root.right = deletion(root.right, successor)
            return root

        }
    } else if (root.data > data) {
        root.left = deletion(root.left, data)
        return root
    } else {
        root.right = deletion(root.right, data)
        return root
    }

}

function findSuccessor(root) {
    while (root.left != null) {
        root = root.left
    }
    return root.data
}

//updating
function updating(root, data) {

}

//finding
let bool = false
function find(root, data) {
    if (root == null) {
        return bool
    }

    if (root.data == data) return bool = true

    if (root.data > data) {
        find(root.left, data)
    } else {
        find(root.right, data)
    }


    return bool
}



insertion(root, 20)
insertion(root, 5)
insertion(root, 2)
insertion(root, 25)

// print(root)
deletion(root, 10)
// deletion(root, 25)
// deletion(root, 2)
print(root)
// console.log(find(root, 25))