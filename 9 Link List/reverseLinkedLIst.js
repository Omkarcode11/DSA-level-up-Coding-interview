class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  if (head === null || head.next == null) return head;

  let sHead = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;

  return sHead;
}

function print(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

let list = new Node(10);
list.next = new Node(20);
list.next.next = new Node(30);
list.next.next.next = new Node(40);
list.next.next.next.next = new Node(50);
print(reverseLinkedList(list))
print(list);
