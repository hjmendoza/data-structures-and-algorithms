'use strict';

const LinkedList = require('../ll_kth_from_end.js');

describe('Singly Linked List', () => {
  it('should return kth from end', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.append(6);
    list.kthFromEnd(2);

    expect(list.head.value).toBe(4);
  });
});