'use strict';
const { LinkedList } = require('../ll-detect-loop');

describe('Detect Loop method', () => {
  it('hasLoop() returns true if linked list has circular reference', () => {
    let ll = new LinkedList();
    ll.append(2);
    ll.append(4);
    ll.append(6);
    ll.head.next.next = ll.head;
    expect(ll.hasLoop()).toEqual(true);
  });
  it('hasLoop() returns false if linked list does not have circular reference', () => {
    let ll = new LinkedList();
    ll.append(2);
    ll.append(4);
    ll.append(6);
    expect(ll.hasLoop()).toEqual(false);
  });
  it('hasLoop() returns null if linked does not have > 1 nodes', () => {
    let ll = new LinkedList();
    expect(ll.hasLoop()).toBeNull();
  });
});
