const Tree = require('../lib/tree.js');

describe('Tree module should', () => {

  it('insert(node) should insert a new node', () => {
    let tree = new Tree;
    tree.insert(5);
    expect(tree.root.value).toBe(5);
  });

  it('insert(node) should insert a node to the left if the given value < root value', () => {

    let tree = new Tree;
    tree.insert(15);
    expect(tree.root.value).toBe(15);

    tree.insert(5);
    expect(tree.root.left.value).toBe(5);

    tree.insert(1);
    expect(tree.root.left.left.value).toBe(1);
  });

  it('insert(node) should insert a node to the right if the given value > root value', () => {
    
    let tree = new Tree;
    tree.insert(15);
    expect(tree.root.value).toBe(15);

    tree.insert(20);
    expect(tree.root.right.value).toBe(20);

    tree.insert(25);
    expect(tree.root.right.right.value).toBe(25);
  });

  it('remove(value) should return null root after removing one', () => {
    let tree = new Tree;
    tree.insert(5);
    tree.remove(5);

    expect(tree.root).toBe(null);
  });

  it('remove(value) should remove the last node from on the left', () => {

    let tree = new Tree;
    tree.insert(10);
    tree.insert(5);
    tree.insert(5);
    tree.insert(15);
    tree.remove(5);

    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.left.left).toBeNull();
  });


  it('remove(value) should remove the last node from the right', () => {
    
    let tree = new Tree;
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(20);
    tree.remove(20);

    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.right).toBeNull();
  });

  it('find(node) should find one node', () => {
    let tree = new Tree;
    tree.insert(5);
    expect(tree.find(5)).toBe(5);
  });

  it('find(node) should find a node to the right', () => {
    let tree = new Tree;
    tree.insert(10);
    tree.insert(5);
    tree.insert(20);
    tree.insert(25);

    expect(tree.find(25)).toBe(25);
  });

  it('find(node) should find a node to the left', () => {
    let tree = new Tree;
    tree.insert(4);
    tree.insert(2);
    tree.insert(6);
    tree.insert(1);

    expect(tree.find(1)).toBe(1);
  });

  it('stringify() should return a string of data convert data', () => {
    let tree = new Tree;
    tree.insert(15);
    tree.insert(5);
    tree.insert(20);
    let results = [];
    let expected = '15, 5, null, null, 20, null, null';

    expect(tree.serialize(tree.root, results)).toEqual(expected);
  });


  it('deserialize() should convert a string into a binary tree', () => {
    
  });

});
