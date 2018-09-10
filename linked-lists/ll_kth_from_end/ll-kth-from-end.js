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

  kthfromEnd(k) {

    let counter = 0;
    let length = 1;
    let current = this.head;

    if(!current){
      return null;
    }

    while (current.next !== null) {
      length++;
      current = current.next;
    }

    current = this.head;

    let target = length - k;

    while (current) {

      if(target === counter) {
        return current.value;
      } else {
        current = current.next;
        counter++;
      }
    }
    return null;
  }
}

module.exports = {
  LinkedList,
  Node,
};