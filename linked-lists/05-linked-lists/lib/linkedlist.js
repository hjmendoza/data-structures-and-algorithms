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

  remove(){
    if (!this.head) return 'null';
    else{
      let current = this.head;
      let save = null;
      while(current.next !== null){
        save = current.next;
        current = current.next;
      }
      save = null;
    }
  }

  serialize(){
    // Big O: O(n)
    let stringList = '';
    let current = this.head;
    if (!this.head) return 'null';
    else {
      while (current) {
        stringList += `${current.value}`;
        current = current.next;
      }
      return stringList;
    }
  }


  deserialize(stringList){
    // Big O: O(n)
    var i = 0;
    let list = new LinkedList;
    while (i < stringList.length){
      var newNode = new Node(stringList[0]);
      this.head = newNode;
    }
  }
}



module.exports = LinkedList;



