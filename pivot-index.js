// add whatever parameters you deem necessary
function pivotIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;
    nums.forEach((e) => {
        totalSum += e;
    })

    for(let i = 0; i < nums.length; i++){
        if(totalSum - leftSum - nums[i] === leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}
/*
[1,7,3,6,5,6] = 28
leftSum = 0  numbers seen so far + 1 + 7 + 3
                    currNum
        leftSum  
28   -    0      -      1 = 0         is not
28   -    1      -      7 = 1         is not
28   -    8      -      3 = 8         is not
28   -   11      -      6 = 11         yes, so we return 


pivotIndex([1,2,1,6,3,1]) // 3
pivotIndex([5,2,7]) // -1  no valid pivot index
pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2 
*/