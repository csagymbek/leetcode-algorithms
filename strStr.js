// 28. Implement strStr()
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
function strStr(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"));//2
console.log(strStr("aaaaa", "bba"));//-1
