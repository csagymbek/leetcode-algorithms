// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Time complexity: O(n^2)
// Space complexity: O(1)
// Runtime: 88 ms
function twoSum(nums, target){
  for(var i = 0; i < nums.length; i++){
    for(var j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }
}
// Runtime: 72 ms
function twoSum(nums, target){
  for(var i = 0; i < nums.length; i++){
    for(var j = i + 1; j < nums.length; j++){
      if(target - nums[i] === nums[j]){
        return [i, j];
      }
    }
  }
}
// Time complexity: O(1)
// Runtime: 52 ms
function twoSum(nums, target){
  var obj = {};
  for(var i = 0; i < nums.length; i++){
    if(obj[nums[i]] === undefined){
      obj[target - nums[i]] = i;
    } else{
      return [obj[nums[i]], i];
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));//[0, 1]
