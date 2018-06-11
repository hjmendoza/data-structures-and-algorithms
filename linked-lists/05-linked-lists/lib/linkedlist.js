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

  prepend(value) {
    // Big O: O(1)
    if (!this.head) this.head = new Node(value);
    else {
      let current = this.head;
      current.next = this.head;
      this.head = new Node(value);
    }
  }

  reverse() {
    // Big O: O(n)
    if (!this.head.next) return this.head;
    else {
      let current = this.head;
      let previous = null;
      while (current.next) {
        let save = current.next;
        current.next = previous;
        previous = current;
        current = save;
      }
      this.head = current;
      this.head.next = previous;
    }
  }

  serialize() {
    // Big O: O(n)
    let stringList = '';
    let current = this.head;
    if (!this.head) return 'null';
    else {
      while (current.next) {
        stringList += `${current.value} next is `;
        current = current.next;
      }
      stringList += `${current.value} next is null`;
      return stringList;
    }
  }
}

module.exports = LinkedList;