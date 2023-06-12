class Node { 
    constructor(data){
        this.data = data
        this.next =null
    }
}


function findMiddleElement(head){
    let slow = head
    let fast = head
    while(fast!=null && fast.next!=null){
        slow = slow.next
        fast= fast.next.next
    }
    return slow
}


let list = new Node(10)
list.next = new Node(20)
list.next.next = new Node(30)
list.next.next.next = new Node(40)
list.next.next.next.next = new Node(50)
