class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  fast = fast.next.next;
  slow = slow.next;
  while (fast != slow && fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast == null || fast.next == null) return null;
  fast = head;
  count = 0;
  while (fast != slow) {
      fast = fast.next;
    slow = slow.next;
    count++;
  }
  return count;
};

let list = new Node(10);
list.next = new Node(20);
list.next.next = new Node(30);
list.next.next.next = new Node(40);
list.next.next.next.next = new Node(50);
list.next.next.next.next.next = list.next.next;

console.log(detectCycle(list));
