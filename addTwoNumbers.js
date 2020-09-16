// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
var l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);
var l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);
// time complexity: O(max(m, n));
// space complexity: O(max(m, n));
function addTwoNumbers(l1, l2){
  var result = new Node();
  var resultPointer = result;
  var sum = 0;
  var carry = 0;
  var digit = 0;
  while(l1 || l2 || carry){
    resultPointer.next = new Node();
    resultPointer = resultPointer.next;
    sum = 0;
    if(l1){
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2){
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    carry = Math.floor(sum / 10);
    digit = sum % 10;
    resultPointer.val = digit;
  }
  return result.next;
}
console.log(addTwoNumbers(l1, l2));
