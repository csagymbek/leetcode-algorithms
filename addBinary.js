// 67. Add Binary
// Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
function addBinary(a, b){
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    // return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2);
}
console.log(addBinary(11, 1));//100
console.log(addBinary(1010, 1011));//10101