class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMid(head) {
  let fast = head.next;
  let slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(head1, head2) {
  let temp1 = head1;
  let temp2 = head2;
  let newList = new Node("start");
  let temp3 = newList;
  while (temp1 != null && temp2 != null) {
    if (temp1.data < temp2.data) {
      temp3.next = temp1;
      temp1 = temp1.next;
    } else {
      temp3.next = temp2;
      temp2 = temp2.next;
    }
    temp3 = temp3.next;
  }
  while (temp1 != null) {
    temp3.next = temp1;
    temp1 = temp1.next;
    temp3 = temp3.next;
  }
  while (temp2 != null) {
    temp3.next = temp2;
    temp2 = temp2.next;
    temp3 = temp3.next;
  }
  return newList.next;
}

function mergeSort(head) {
  if (head.next == null) return head;

  let mid = findMid(head);
  let head2 = mid.next;
  mid.next = null;

  let list1 = mergeSort(head)
  let list2 = mergeSort(head2)
  let finalList = merge(list1,list2)
  

  return finalList
}

let list = new Node(1);
list.next = new Node(7);
list.next.next = new Node(3);
list.next.next.next = new Node(9);
list.next.next.next.next = new Node(4);
list.next.next.next.next.next = new Node(10);

list = mergeSort(list);

print(list);

function print(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}
