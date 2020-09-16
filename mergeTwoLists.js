// 21. Merge Two Sorted Linked Lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
var l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(4);
var l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);
function mergeTwoLists(l1, l2){
  var newNode = new Node();
  var currentNode = newNode;
    if(!l1 || !l2){
      return l1 || l2;
    }
    while(l1 && l2){
      if(l1.val < l2.val){
        currentNode.next = l1;
        l1 = l1.next;
      } else{
        currentNode.next = l2;
        l2 = l2.next;
      }
      currentNode = currentNode.next;
    }
    if(l1){
      currentNode.next = l1;
    } else{
      currentNode.next = l2;
    }
  return newNode.next;
}

// recursive solution
function mergeTwoLists(l1, l2) {
    if(!l1 || !l2) return l1 || l2
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
};
console.log(mergeTwoLists(l1, l2));
