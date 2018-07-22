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
});
