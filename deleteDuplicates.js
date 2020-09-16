// 83. Remove Duplicates from Sorted List
// Given a sorted linked list, delete all duplicates such that each element appear only once
// Example:
// Input: 1->1->2->3->3
// Output: 1->2->3
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
var head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
function deleteDuplicates(head){
  var node = head;
  while(node && node.next){
    if(node.val === node.next.val){
      node.next = node.next.next;
    } else{
      node = node.next;
    }
  }
  return head;
}
console.log(deleteDuplicates(head));//Node {
  // val: 1,
  // next: Node { val: 2, next: Node { val: 3, next: null } }}
