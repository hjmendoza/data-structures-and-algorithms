'use strict';

const adjacentProduct = require('../array-adjacent-product.js');

describe('Array adjacent product method', () => {

  it('largestAdjProduct returns the largest product of 2 adjacent values in 2D array', () => {
    expect(adjacentProduct.largestAdjProduct( [ 
      [ 1, 2, 1 ], 
      [ 2, 4, 2 ], 
      [ 3, 6, 8 ], 
      [ 7, 8, 1 ]])).toEqual(64);
  });

  it('largestAdjProduct returns the largest product with a large number in the first row', ()=>{
    expect(adjacentProduct.largestAdjProduct( [ 
      [ 1, 2, 200 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8, 1 ]])).toEqual(800);
  });
  it('largestAdjProduct returns the largest product with a large number in the last row', ()=>{
    expect(adjacentProduct.largestAdjProduct( [ 
      [ 1, 2, 1 ], 
      [ 2, 4, 2 ], 
      [ 3, 2, 8 ], 
      [ 7, 8000, 1 ]])).toEqual(64000);
  });
  it('largestAdjProduct handles negative numbers', ()=>{
    expect(adjacentProduct.largestAdjProduct( [ 
      [ 1, 2, 1 ], 
      [ 2, 4, 2], 
      [ 3, 6, -8 ], 
      [ 7, 8, 1 ]])).toEqual(56);
  });
  it('largestAdjProduct handles empty values', ()=>{
    expect(adjacentProduct.largestAdjProduct( [ 
      [1, 2, 1 ], 
      [ 2, 4, 2 ], 
      [ 3, 6, 8 ], 
      [ 7, '', 1 ]])).toEqual(48);
  });
} );