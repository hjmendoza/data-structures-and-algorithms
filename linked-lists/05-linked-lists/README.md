![cf](http://i.imgur.com/7v5ASc8.png) Linked List Data Structure - Haley Mendoza
====
[![Build Status](https://travis-ci.com/hjmendoza/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/hjmendoza/data-structures-and-algorithms)

## Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  * **index.js** -- The entry point to the module
  * **lib/** -- directory holding program helper modules
  * **__tests__/** -- directory holding program unit and integration tests

##  Installing
  * After cloning repository, in main directory, run `npm i` to install dependencies 
  * All methods are available in **lib/** directory
  * In terminal, run `npm test` to run all unit test

## Feature Methods 
* Implemented a Singly Linked List (SLL) data structure
* All methods contain comments indicating Big O
* Implemented the following methods:
  * Visual of SLL: `H > 2 > 4 > 6 > 8 > NULL`
  * `append(value)` adds a value to the end of the list.
    * Ex: `append(6)` will return `H > 2 > 4 > 6 > 8 > 6 > NULL`
  * `prepend(value)` adds a value to the beginning of list, essentially creating a new head
    * Ex: `prepend(1)` will return `H > 1> 2 > 4 > 6 > 8 > NULL`
  * `reverse()` will reverse the order of list
    * Ex: `list.reverse()` will return `H > 8 > 6 > 4 > 2 > NULL`
  * `remove(offset)` will remove the value defined by the offset and set it to null.
    * Ex: `remove(2)` will return `H > NULL > 4 > 6 > 8 > NULL`
	* `serialize` converts an object to string form
    * Ex: `list.serialize()` will return `2468`
	* `deserialize` takes the serialized string and converts to an object
    * Ex: `deserialize('2468')` will return a LL as `H > 2 > 4 > 6 > 8 > NULL`