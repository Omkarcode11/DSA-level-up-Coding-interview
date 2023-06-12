class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function findLength(head){
    let count = 0 
    while(head!=null){
        count++
        head = head.next
    }
    return count
}

function reverseKLL(head, k) {
  let len = findLength(head)
  let prev = null;
  let next = null;
  let curr = head;
  let count = 0;
  while (curr != null && count < k && len>=k ) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
    if(count==k){
        
        len -= k
    }
  }
  if(len<k && curr!=null){
    head.next = next
    return prev
  }
  if (next != null)  head.next = reverseKLL(next, k);

  return prev;
}

function print(head){
    while(head!=null){
        console.log(head.data)
        head = head.next
    }
}

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);
list.next.next.next.next.next.next = new Node(7);
list.next.next.next.next.next.next.next = new Node(8);

print(reverseKLL(list,3))