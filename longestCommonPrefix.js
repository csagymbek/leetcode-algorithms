// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// // If there is no common prefix, return an empty string "".
// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note: All given inputs are in lowercase letters a-z.

// A prefix is an affix which is placed before the stem of a word. Adding it to the beginning of one word changes it into another word. For example, when the prefix un- is added to the word happy, it creates the word unhappy.
const longestCommonPrefix = strs =>{
    if(strs.length === 0) return "";
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
}

const longestCommonPrefix = strs =>{
    if(strs.length === 0) return "";
    let prefix = "";
    for(let i = 0; i < strs[0].length; i++){
        let char = strs[0][i];
        for(let j = 0; j < strs.length; j++){
            if(strs[j][i] !== char) return prefix;
        }
        prefix += char;
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));//"fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));//""