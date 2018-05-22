function insertShiftArray(arr, val){
  let newArr = [];
  let desiredIndex = Math.ceil(arr.length/2);
  for(let i=0; i < arr.length+1; i++){
    if(i < desiredIndex){
      newArr[i] = arr[i];
    }
    if(i == desiredIndex){
      newArr[i] = val;
    }
    if(i > desiredIndex){
      newArr[i] = arr[i-1];
    }
  }
  return newArr;
}