// 5. Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
function longestPalindromicSubstring(s){
  var max = "";
  for(var i = 0; i < s.length; i++){
    for(var j = 0; j < 2; j++){
      var left = i;
      var right = i + j;
      while(s[left] && s[left] === s[right]){
        left--;
        right++;
      }
      if((right - left - 1) > max.length){
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
}
console.log(longestPalindromicSubstring("babad"));//"bab"
console.log(longestPalindromicSubstring("cbbd"));//bb
