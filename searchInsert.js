// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.
function searchInsert(nums, target){
    for(var i = 0; i < nums.length; i++){
        if(target <= nums[i]){
            return i;
        }
    }
    return nums.length;
}

function searchInsert(nums, target){
    var i = 0;
    var j = nums.length;
    while(i <= j){
        var mid = Math.floor((i + j) / 2);
        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] < target){
            i++;
        } else{
            j--;
        }
    }
    return i;
}
console.log(searchInsert([1,3,5,6], 5));//2
console.log(searchInsert([1,3,5,6], 2));//1
console.log(searchInsert([1,3,5,6], 7));//4
console.log(searchInsert([1,3,5,6], 0));//0
console.log(searchInsert([]));//0

