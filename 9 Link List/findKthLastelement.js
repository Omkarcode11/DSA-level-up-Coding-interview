class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findKLastElement(head, k) {
  let slow = head;
  let fast = head;
  let totalLen = 0;
  let count = 0;
  while (fast != null && fast.next != null) {
    totalLen += 2;
    count++;
    slow = slow.next;
    fast = fast.next.next;
    if (fast && fast.next == null) totalLen++;
  }

  if (totalLen - k >= 0) {
    if (totalLen - k == 0) {
      return head.data;
    } else if (totalLen - k == count) {
      return slow.data;
    } else if (totalLen - k > count) {
      while (totalLen - k > count) {
        count++;
        slow = slow.next;
      }
      return slow.data;
    }else{
        let temp = head
        count = 0
        while(temp!=null && count<totalLen-k){
            count++
            temp= temp.next
        }
        return temp.data
    }
  }

  return null;
}

let list = new Node(10);
list.next = new Node(20);
list.next.next = new Node(30);
list.next.next.next = new Node(40);
list.next.next.next.next = new Node(50);

console.log(findKLastElement(list, 6));
