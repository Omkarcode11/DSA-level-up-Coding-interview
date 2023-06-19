class Node {
    constructor(data) {
        this.data = data 
        this.left = null
        this.right = null
        
    }
}


function isBalance(root){
    let p = {}
    if(root==null){
        p.height = 0 
        p.bal = true
        return p
    }

    let lr = isBalance(root.left)
    let rr = isBalance(root.right)

    p.height = 1 + Math.max(lr.height + rr.height)

    if(lr.bal && rr.bal && Math.abs(lr.height-rr.height)<=1){
        p.bal = true
        return  p
    }else{
        p.bal = false
        return p
    }
}


let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
// root.left.right = new Node(5)
// root.left.left.left = new Node(6);
root.right = new Node(3);


console.log(isBalance(root).bal);