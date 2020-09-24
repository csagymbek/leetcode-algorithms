// 38. Count and Say
// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit. Note: Each term of the sequence of integers will be represented as a string.
function countAndSay(n){
    var str = "1";
    for(var i = 1; i < n; i++){
        var strAr = str.split("");
        var count = 1;
        str = "";
        for(var j = 0; j < strAr.length; j++){
            if(strAr[j] !== strAr[j + 1]){
                str += count + strAr[j];
                count = 1;
            } else{
                count++;
            }
        }
    }
    return str;
}
console.log(countAndSay(1));//"1"
console.log(countAndSay(2));//"11"
console.log(countAndSay(3));//"21"
console.log(countAndSay(4));//"1211"
console.log(countAndSay(5));//"111221"
