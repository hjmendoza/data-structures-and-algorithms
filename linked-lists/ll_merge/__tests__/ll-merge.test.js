'use strict';
const { LinkedList } = require('../ll-merge');

describe('Linked List Merge Method', () => {
  it('merge() method should merge two linked lists', ()=>{
    let ll1 = new LinkedList();
    ll1.append(3);
    ll1.append(5);
    ll1.append(7);

    let ll2 = new LinkedList();
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);

    let list = new LinkedList();

    expect((list.merge(ll1, ll2)).head.value).toBe(2);
    expect((list.merge(ll1, ll2)).head.next.value).toBe(3);
    expect((list.merge(ll1, ll2)).head.next.next.value).toBe(4);
  });

  it('merge() method should merge two linked lists that are not same size', ()=>{
    let ll1 = new LinkedList();
    ll1.append(3);

    let ll2 = new LinkedList();
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);

    let list = new LinkedList();

    expect((list.merge(ll1, ll2)).head.value).toBe(2);
    expect((list.merge(ll1, ll2)).head.next.value).toBe(3);
  });
  it('merge() method should merge two linked lists with just a head', ()=>{
    let ll1 = new LinkedList();
    ll1.append(3);

    let ll2 = new LinkedList();
    ll2.append(2);

    let list = new LinkedList();

    expect((list.merge(ll1, ll2)).head.value).toBe(2);
    expect((list.merge(ll1, ll2)).head.next.value.value).toBe(3);
  });
  
}); 