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

  // PREPEND
  it('prepend should create new head if head is null', () => {
    let list = new LinkedList;
    list.prepend(2);

    expect(list.head.value).toBe(2);
  });

  it('prepend should add a new node if head exists', () => {
    let list = new LinkedList;
    list.append(2);
    list.prepend(6);

    expect(list.head.value).toBe(6);
  });

  it('prepend should add a new node to beginning of list', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.prepend(60);

    expect(list.head.value).toBe(60);
  });

  // REVERSE
  it('reverse should return head if only one node exists', () => {
    let list = new LinkedList;
    list.append(2);
    list.reverse();

    expect(list.head.value).toBe(2);
  });

  it('should reverse a list with only 2 nodes', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.reverse();

    expect(list.head.value).toBe(4);
    expect(list.head.next.value).toBe(2);
  });

  it('should reverse a list with several nodes', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.append(6);
    list.reverse();

    expect(list.head.value).toBe(6);
    expect(list.head.next.value).toBe(4);
    expect(list.head.next.next.value).toBe(2);
  });

  it('remove should null if head does not exist', () => {
    let list = new LinkedList;
    list.remove();

    expect(list).toBeNull;
  });


  it('remove should return head if only one node exists', () => {
    let list = new LinkedList;
    list.append(2);
    list.remove();

    expect(list.head.value).toBe(2);
  });

  it('remvoe should remove the last item in the list', () => {
    let list = new LinkedList;
    list.append(2);
    list.append(4);
    list.append(6);
    list.reverse();

    expect(list.head.next.value).toBe(4);
  });

  it('serialize should return /"null/" for an empty list', () => {
    let list = new LinkedList;
    list.serialize();
  });

  it('seriazlie should stringify a list with 2 nodes', () => {
    let list = new LinkedList;
    list.append(4);
    list.append(6);

    expect(list.serialize()).toBe('46');
  });

  it('serialize should stringify a list with several nodes', () => {
    let list = new LinkedList;
    list.append(4);
    list.append(6);
    list.append(8);

    expect(list.serialize()).toBe('468');
  });

  xit('deserialize should return a new linked list if passed an empty string', () => {
    let list = new LinkedList;
    list.append(4);
    list.append(6);
    list.append(8);
    list.serialize();
    
    expect(list.deserialize('456').toBe('something'));
  });
});