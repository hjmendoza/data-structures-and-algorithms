![cf](http://i.imgur.com/7v5ASc8.png) Tree Data Structure - Haley Mendoza
====
[![Build Status](https://travis-ci.com/hjmendoza/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/hjmendoza/data-structures-and-algorithms)

#### Features 
  * implemented a Tree Constructor
  * implemented the following functions:
    * `insert(node)` adds a new node with a given value to the tree
     ```javascript
        let tree = new Tree();
        tree.insert(5);  // {root: {value: 5, right: null, left: null}
      ```
    * `remove(node)` will find and delete a given value
    ```javascript
      let tree = new Tree(); 
      tree.insert(10);
      tree.insert(15);
      tree.remove(10);  // removes 10
    ```
    * `find(node)` will find and return the value in the tree if it exists.
    ```javascript
    let tree = new Tree(); 
    tree.insert(15); 
    tree.insert(10); 
    tree.find(15); // returns 15
    ```
    * `serialize()` will stringify a given tree and return the string
    ```javascript
    let tree = new Tree;
    tree.insert(15);
    tree.insert(5);
    tree.insert(20);
    tree.serialize(); // returns '15, 5, null, null, 20, null, null'
    ```
    * `deserialize()` will parse a stringified tree and return the tree
  