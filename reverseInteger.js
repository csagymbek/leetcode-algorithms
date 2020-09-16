// 7. Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1: Input: 123 Output: 321
// Example 2: Input: -123 Output: -321
// Example 3: Input: 120 Output: 21
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
function reverse(x){
  let str = Math.abs(x).toString().split("").reverse().join("");
  let num = Number(x < 0 ? `-${str}` : str);
  return num > 2 ** 32 || num < -(2 ** 31) ? 0 : num;
}

const reverse = n =>{
  let reversed = parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
  // console.log(reversed)
  return reversed > (2**31) || reversed < -(2**31) ? 0 : reversed;
}
console.log(reverse(123));//321
console.log(reverse(-123));//-321
console.log(reverse(120));//21
console.log(reverse(1534236469));//0
console.log(reverse(-2147483648));//0
console.log(reverse(1563847412));//0

