'use strict';

const LinkedList = require('../ll_insertions.js');

describe('Singly Linked List', () => {
  it('should create a new linked list with null values', () => {
    let list = new LinkedList;

    expect(list.head).toBeNull();
  });
  // APPEND 
  it('append should create new head if head is null', () => {
    let list = new LinkedList;
    list.append(2);

    expect(list.head.value).toBe(2);
  });

  it('append should add a new node to end of list', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.append(6);

    expect(list.head.next.next.value).toBe(6);
  });

  it('the last appended value should have a next of null', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.append(6);

    expect(list.head.next.next.next).toBeNull;
  });

  // INSERT BEFORE
  it('insertBefore should insert a new value before the given value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(4);
    list.insertBefore(4, 3);

    expect(list.head.next.next.value).toBe(3);
  });

  it('insertBefore should create new head if given value is the head', () => {
    let list = new LinkedList;
    list.append(5);
    list.insertBefore(5, 20);

    expect(list.head.value).toBe(20);
  });

  // INSERT AFTER
  it('insertAfter should insert a new value after the given value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(4);
    list.insertAfter(4, 3);

    expect(list.head.next.next.next.value).toBe(3);
  });

  it('insertAfter should define a head.next if the list has 1 item', () => {
    let list = new LinkedList;
    list.append(1);
    list.insertAfter(1, 2);

    expect(list.head.next.value).toBe(2);
  });
});