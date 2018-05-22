function binarySearch(arr, searchKey){
  let i = 0;
  while(i < arr.length){
    if (arr[i] === searchKey){
      return i;
    } else {
      i++;
    }
  }
  return -1;
}