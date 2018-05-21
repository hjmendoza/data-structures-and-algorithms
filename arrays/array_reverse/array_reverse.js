function reverse(arr) {

  let newArr = [];
  let counter = 0;
  for(let i=arr.length-1; i >= 0; i-=1) {
    newArr[counter] = arr[i];
    counter +=1;
  }
  return newArr;
}
