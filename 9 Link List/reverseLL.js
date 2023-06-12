class Node {
    constructor(data) {
        this.data = data
        this.next = null

    }
}

function reverseLL(head){
    let prev = null
    let curr = head
    let next = null
    while(curr!=null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next 
    }
    head = prev
    return head
}



function print(head){
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


print(reverseLL(list))