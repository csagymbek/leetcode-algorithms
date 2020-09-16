// 141. Linked List Cycle
// Given a linked list, determine if it has a cycle in it.
// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
var head = new Node(1);
head.next = new Node(2);

function hasCycle(head){
  if(!head){
    return false;
  }
  let walker = head;
  let runner = head;

  while(runner.next && runner.next.next){
    walker = walker.next;
    runner = runner.next.next;
    if(walker === runner){
      return true;
    }
  }
  return false;
};
console.log(hasCycle(head));//true
