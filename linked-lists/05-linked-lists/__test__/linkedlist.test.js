'use strict';

const LinkedList = require('../lib/linkedlist.js');

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
});