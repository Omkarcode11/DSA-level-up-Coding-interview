class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

function findDiameter(root,ans =0){
    if(root==null)return 0
    let lh = findDiameter(root.left,ans)
    let rh = findDiameter(root.right,ans)
    ans  = Math.max(ans , 1+lh+rh)
    return 1 + Math.max(lh,rh)
}

function findDia(root){
    //base Case 
    if(root==null)return 0 
    //rec case
    let d1 = height(root.left) + height(root.right)
    let d2 = findDia(root.left)
    let d3 = findDia(root.right)

    return Math.max(d1,d2,d3)
}




let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.right = new Node(15);
root.left.left = new Node(7);

console.log(findDia (root))