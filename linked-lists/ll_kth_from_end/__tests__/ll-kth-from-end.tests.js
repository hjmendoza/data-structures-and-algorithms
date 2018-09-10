'use strict';
const { LinkedList } = require('../ll-kth-from-end');
describe('Singly linked list module', () => {
  it('kthfromEnd() method returns the last element of a list', ()=>{
    let ll = new LinkedList();
    ll.append(2);
    ll.append(4);
    ll.append(6);
    expect(ll.kthfromEnd(1)).toEqual(6);
  });
  it('kthfromEnd() method returns kth of 3 of a list', ()=>{
    let ll = new LinkedList();
    ll.append(2);
    ll.append(4);
    ll.append(6);
    expect(ll.kthfromEnd(3)).toEqual(2);
  });

  it('kthfromEnd() method returns second element in list of two', ()=>{
    let ll = new LinkedList();
    ll.append(2);
    ll.append(4);
    expect(ll.kthfromEnd(1)).toEqual(4);
  });

  it('kthfromEnd() method returns head in list of one', ()=>{
    let ll = new LinkedList();
    ll.append(2);
    expect(ll.kthfromEnd(1)).toEqual(2);
  });

  it('kthfromEnd() method returns null if list is empty', ()=>{
    let ll = new LinkedList();
    expect(ll.kthfromEnd(1)).toBeNull();
  });
}); 