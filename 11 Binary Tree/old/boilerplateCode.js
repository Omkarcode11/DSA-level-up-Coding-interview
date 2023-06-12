class Node { 
constructor(data){
    this.data = data 
    this.left = null
    this.right = null 
}
}


let arr = [1,2,4,-1,-1,5,7,-1,-1,-1,3,-1,6,-1,-1]


function buildTree(arr,i=0){
    if(arr[i]==-1)return null

 let newNode = new Node(arr[i])
   newNode.left = buildTree(arr,i+1)
   newNode.right = buildTree(arr,i+1)
   return newNode  
}

let bt = buildTree(arr)

inOrder(bt)

function inOrder(node){
 
    if(node==null)return

    inOrder(node.left)
    console.log(node.data)
    inOrder(node.right)

}



