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
    if (!this.head) this.head = new Node(value);
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  hasLoop() {

    if (this.head == null || this.head.next == null) {
      return null;
    }

    let slow = this.head;
    let fast = this.head.next.next;

    while (slow != null && fast != null && fast.next != null) {

      if (slow === fast) {
        return true;
      } else {
        slow = slow.next;
        fast = fast.next.next;
      }

    }
    return false;
  }
}

module.exports = {
  LinkedList,
  Node,
};