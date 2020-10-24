// 66. Plus One
// Given a non-empty array of digits representing a non-negative integer, increment one to the integer. The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit. You may assume the integer does not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]
function plusOne(digits){
    // return (parseInt(digits.join("")) + 1).toString().split("");
    for(var i = digits.length - 1; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i]++;
            return digits;
        } else{
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}
console.log(plusOne([1,2,3]));//[1,2,4]
console.log(plusOne([4,3,2,1]));//[4,3,2,2]
console.log(plusOne([0]));//[1]
console.log(plusOne([9, 9, 9]));//[1,0,0,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));//[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]