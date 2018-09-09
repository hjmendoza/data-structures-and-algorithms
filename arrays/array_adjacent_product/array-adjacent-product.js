module.exports = exports = {};
exports.largestAdjProduct = (array) => {
  var maxDiagonalProduct = 0;
  var x = 0;
  while (x < (array.length - 1)) {
    var finalProduct = findMaxDiagonalProduct(array[x], array[x + 1]);
    maxDiagonalProduct = Math.max(finalProduct, maxDiagonalProduct);
    x = x + 1;
  }

  var maxVerticalProduct = 0;
  var i = 0;
  while (i < array.length - 1) {
    var finalProduct = findMaxVerticalProduct(array[i], array[i + 1]);
    maxVerticalProduct = Math.max(finalProduct, maxDiagonalProduct);
    i++;
  }

  var maxHorizontalProduct = 0;
  var j = 0;
  while (j < array.length) {
    var finalProduct = findMaxHorizontalProduct(array[j]);
    maxHorizontalProduct = Math.max(finalProduct, maxHorizontalProduct);
    j++;
  }

  return Math.max(maxDiagonalProduct, maxHorizontalProduct, maxVerticalProduct);



  function findMaxDiagonalProduct(array1, array2) {
    var maxDiagonalProduct = 0;
    var x = 0;
    while (x < array1.length) {
      var checkProd = 0;
      if (x == 0) {
        checkProd = array1[x] * array2[x + 1];
        maxDiagonalProduct = Math.max(maxDiagonalProduct, checkProd);
        x++;
      } else if (x == array1.length - 1) {
        checkProd = array1[x] * array2[x - 1];
        maxDiagonalProduct = Math.max(maxDiagonalProduct, checkProd);
        x++;
      } else {
        var leftProd = array1[x] * array2[x - 1];
        var rightProd = array1[x] * array2[x + 1];
        maxDiagonalProduct = Math.max(leftProd, rightProd, maxDiagonalProduct);

        x++;
      }
    }
    return maxDiagonalProduct;
  }

  function findMaxVerticalProduct(array1, array2) {
    var maxVerticalProduct = 0;
    var x = 0;
    var checkProd = 0;
    while (x < array1.length) {
      checkProd = array1[x] * array2[x];
      maxVerticalProduct = Math.max(maxVerticalProduct, checkProd);
      x++;
    }
    return maxVerticalProduct;
  }

  function findMaxHorizontalProduct(array) {
    var maxHorizontalProduct = 0;
    var x = 0;
    var checkProd = 0;
    while (x < array.length - 1) {
      checkProd = array[x] * array[x + 1];
      maxHorizontalProduct = Math.max(maxHorizontalProduct, checkProd);
      x ++;
    }
    return maxHorizontalProduct;
  }
};