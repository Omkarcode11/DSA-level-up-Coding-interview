class Node {
    constructor(data){
        this.data = data 
        this.next  = null
    }
}


function insertionsLL(node,i,data){
    let temp = node
    let prev = null
    let count = 0 
    while(temp!=null && count<i){
        prev = temp
        temp = temp.next
        count++
    }
    let newNode = new Node(data)
    prev.next = newNode
    newNode.next = temp

    return node
}

function printLL(head){
    while(head!=null){
        console.log(head.data)
        head = head.next
    }
}

let list = new Node(10)
list.next = new Node(20)
list.next.next = new Node(30)
list.next.next.next = new Node(40)
list.next.next.next.next = new Node(50)

insertionsLL(list,2,800)

printLL(list)