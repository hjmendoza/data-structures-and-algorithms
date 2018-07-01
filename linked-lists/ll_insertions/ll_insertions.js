'use strict';
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

  insertBefore(value, newVal) {
    // Big O: O(1)
    if (value === this.head.value) {
      let saveOldHead = this.head;
      this.head = new Node(newVal);
      this.head.next = saveOldHead;
    }
    let current = this.head;
    while (current.next != null) {
      if (current.next.value === value) {
        let insertVal = new Node(newVal);
        insertVal.next = current.next;
        current.next = insertVal;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    let saveOldNext = current.next;
    current.next = new Node(newVal);
    current.next.next = saveOldNext;
    return;
  }
}

module.exports = LinkedList;