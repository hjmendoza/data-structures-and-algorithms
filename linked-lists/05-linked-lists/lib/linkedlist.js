'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next = next;
  }
}
class List {
  constructor(){
      this.head = null;
  }
  append(value){
    // Big O: O(n)
    if (!this.head) this.head = new Node(val);
    else{
      let current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = new Node(value);
    }
  }
}
