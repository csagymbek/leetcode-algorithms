// 69. Sqrt(x)
// Implement int sqrt(int x). Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:
// Input: 4
// Output: 2

// Example 2:
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
function mySqrt(x){
    if(x <= 1) return x;
    var i = 1;
    var j = x;
    while(i < j){
        var mid = i + Math.floor((j - i) / 2);
        if(mid * mid === x){
            return mid;
        } else if(mid * mid > x){
            j = mid; 
        } else if(mid * mid < x){
            i = mid + 1;
        }
    }
    return i - 1;
}
console.log(mySqrt(4));//2
console.log(mySqrt(8));//2
console.log(mySqrt(9));//3
console.log(mySqrt(10));//3