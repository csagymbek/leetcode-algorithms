// 9. Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Example 1:
// Input: 121
// Output: true

// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalindrome = n =>{
    let pi = n.toString().split("").reverse().join("");
    return n.toString() === pi;
}

const isPalindrome = n =>{
    if(n < 0) return false;
    return n === reversedInteger(n);
}

const reversedInteger = n =>{
    let reversed = 0;
    while(n > 0){
        reversed = (reversed * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return reversed;
}
console.log(isPalindrome(121));//true
console.log(isPalindrome(-121));//false
console.log(isPalindrome(10));//false
