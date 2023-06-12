class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


function mergeTwoSortedLL(head1,head2){
    let temp1 = head1
    let temp2 = head2
    let newNode = new Node("start")
    let temp3 = newNode

    while(temp1!=null && temp2!=null){
        if(temp1.data<=temp2.data){
            temp3.next = temp1
            temp1= temp1.next
            temp3 = temp3.next
            

        }else if(temp1.data>temp2.data){
            temp3.next = temp2
            temp2 = temp2.next
            temp3 = temp3.next
        }
    }

    if(temp1!=null){
        temp3.next = temp1
    }
    if(temp2!=null){
        temp3.next = temp2
    }
    return newNode.next
}

function print(head){
    while(head!=null){
        console.log(head.data)
        head = head.next
}
}

let list = new Node(1)
list.next = new Node(4)
list.next.next = new Node(7)
let list2 = new Node(2)
list2.next = new Node(5)
list2.next.next = new Node(8)
list2.next.next.next = new Node(9)
list2.next.next.next.next = new Node(10)
list2.next.next.next.next.next = new Node(14)

print(mergeTwoSortedLL(list,list2))
// print(list2)