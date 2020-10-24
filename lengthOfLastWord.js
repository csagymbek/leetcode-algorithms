// 58. Length of Last Word
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string. If the last word does not exist, return 0. Note: A word is defined as a maximal substring consisting of non-space characters only.
function lengthOfLastWord(s){
    return s.trim().split(" ").pop().length;
}
console.log(lengthOfLastWord("Hello World"));//5
console.log(lengthOfLastWord("Hello "));//5
console.log(lengthOfLastWord(""));//0
console.log(lengthOfLastWord("a "));//1


