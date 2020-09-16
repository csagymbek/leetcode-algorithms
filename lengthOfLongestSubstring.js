// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
// Example 1: Input: "abcabcbb" Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2: Input: "bbbbb" Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3: Input: "pwwkew" Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
// brute forse method:
function lengthOfLongestSubstring(str){
  var max = 0;
  for(var i = 0; i < str.length; i++){
    var set = new Set(str.charAt(i));
    for(var j = i + 1; j < str.length; j++){
      if(set.has(str.charAt(j))){
        break;
      } else{
        set.add(str.charAt(j));
      }
    }
    if(set.size > max){
      max = set.size;
    }
  }
  return max;
}
// sliding window method:
function lengthOfLongestSubstring(str){
 var i = 0, j = 0, max = 0, set = new Set();
  while(i < str.length){
    if(set.has(str.charAt(i))){
      set.delete(str.charAt(j++));
    } else{
      set.add(str.charAt(i++));
      max = Math.max(set.size, max);
    }
  }
  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));//3
console.log(lengthOfLongestSubstring("bbbbb"));//1
console.log(lengthOfLongestSubstring("pwwkewqfrt"));//7
console.log(lengthOfLongestSubstring(""));//0
