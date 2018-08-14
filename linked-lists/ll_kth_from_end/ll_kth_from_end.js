class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    // Big O: O(n)
    if (!this.head) this.head = new Node(value);
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }
  
  kthFromEnd(value) {
    let length = 0;
    let current = this.head;
    while (current !== null) {
      current = current.next;
      length += 1;
    }
    if (length < value) {
      return;
    }
    current = this.head;
    for (let i = 1; i < ((length - value) + 1); i++) {
      current = current.next;
    }
    console.log(current.value);
  }
}

module.exports = LinkedList;