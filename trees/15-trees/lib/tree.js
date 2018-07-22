'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {

  constructor() {
    this.root = null;
  }

  insert(node) {
    let newNode = new Node(node);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
    }
  }

  find(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      return this.find(node.left, value);
    } else if (value > node.value) {
      return this.find(node.right, value);
    } else {
      return node;
    }
  }

  serialize() {
    let results = [];
    this.serializer(this.root, results);
    return results.join(', ');
  }

  serializer(node, arr) {
    if (!node) {
      arr.push('null');
      return;
    }
    arr.push(node.value);
    this.serializer(node.left, arr);
    this.serializer(node.right, arr);
  }
  
  deserialize(value) {
    value = value.split(',');
    this.index = 0;
    return this.deserializer(value);
  }

  deserializer(value) {
    if (this.index > value.length || value[this.index] === 'null') {
      return null;
    }
    let node = new Node(parseInt(value[this.index]));
    this.index++;
    node.left = this.deserializer(value, this.index);
    this.index++;
    node.right = this.deserializer(value, this.index);
    return node;
  }
}

module.exports = Tree;