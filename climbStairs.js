// 70. Climbing Stairs
// You are climbing a stair case. It takes n steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n){
    var prev = 0;
    var cur = 1;
    var temp;
    for(var i = 0; i < n; i++){
        temp = prev;
        prev = cur;
        cur += temp;
    }
    return cur;
}
function climbStairs(n){
   var obj = {};
    if(n < 3) return n;
    if(!(n in obj)){
        obj[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
   return obj[n];
}
function climbStairs(n){
    var dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for(var i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(climbStairs(2));//2
console.log(climbStairs(3));//3