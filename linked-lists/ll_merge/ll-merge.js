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

  merge(list1, list2) {
    let mergedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 || current2) {

      if (current1 == null && current2 !== null) {
        while (current2) {
          mergedList.append(current2);
          current2 = current2.next;
        }
      } else if (current2 == null && current1 !== null) {
        while (current1) {
          mergedList.append(current1);
          current1 = current1.next;
        }
      } else {
        let min = Math.min(current1.value, current2.value);
        mergedList.append(min);
        if (min === current1.value) {
          current1 = current1.next;
        }
        if (min === current2.value) {
          current2 = current2.next;
        }
      }
    }
    return mergedList;
  }
}

module.exports = {
  LinkedList,
  Node,
};