// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length -1;
    //get the sum of every two posible combination
    while(left < right) {
      let average = arr[left] + arr[right] / 2;
  
      if(average === target){
        return true;
      } else if(average > target){
        right--;
      } else {
        left ++;
      }
    }
   return false; 
  }

  /*averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false */