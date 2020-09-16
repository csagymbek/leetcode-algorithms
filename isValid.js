// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

function isValid(s){
    if(s.length === 0) return 0;
    if(s.length % 2 === 1) return false;
    var ar = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            ar.push(s[i]);
        } else if(s[i] === ")" && ar.length !== 0 && ar[ar.length - 1] === "("){
            ar.pop();
        } else if(s[i] === "]" && ar.length !== 0 && ar[ar.length - 1] === "["){
            ar.pop();
        } else if(s[i] === "}" && ar.length !== 0 && ar[ar.length - 1] === "{"){
            ar.pop();
        } else {
            return false;
        }
    }
    return ar.length === 0;
}

function isValid(s){
    var obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    var ar = [];
    for(var i = 0; i < s.length; i++){
        if(obj[s[i]]){
            ar.push(obj[s[i]]);
        } else{
            if(ar.pop() !== s[i]) return false;
        }
    }
    return !ar.length;
}

function isValid(str){
    if(str.length % 2 === 1) return false;
    if(str.length === 0) return true;
    var ar = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === "(") ar.push(")"); 
        else if(str[i] === "[") ar.push("]");
        else if(str[i] === "{") ar.push("}");
        else if(ar.pop() !== str[i]) return false;
    }
    return !ar.length;
}
console.log(isValid("()"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("(]"));//false
console.log(isValid("([)]"));//false
console.log(isValid("{[]}"));//true
console.log(isValid("([}}])"));//false