// // 定义一个函数来反转链表
// function reverseList(head) {
//     // 定义一个栈
//     let stack = [];
//     // 把链表节点全部摘掉放到栈中
//     while (head != null) {
//       stack.push(head);
//       head = head.next;
//     }
//     // 如果栈为空，返回 null
//     if (stack.length == 0) {
//       return null;
//     }
//     // 弹出栈顶的节点，作为新的头节点
//     let node = stack.pop();
//     let dummy = node;
//     // 栈中的节点全部出栈，然后重新连成一个新的链表
//     while (stack.length > 0) {
//       let tempNode = stack.pop();
//       node.next = tempNode;
//       node = node.next;
//     }
//     // 最后一个节点就是反转前的头节点，一定要让他的 next 等于空，否则会构成环
//     node.next = null;
//     // 返回新的头节点
//     return dummy;
//   }
function reverseList(head) {
  let stack = [];
while (head !== null) {
    stack.push(head)
    head = head.next
}
if(stack.length == 0){
    return null
}
    let node = stack.pop();
    let dummy = node;
    // 栈中的节点全部出栈，然后重新连成一个新的链表
    while (stack.length > 0) {
      let tempNode = stack.pop();
      node.next = tempNode;
      node = node.next;
    }
    // 最后一个节点就是反转前的头节点，一定要让他的 next 等于空，否则会构成环
    node.next = null;
    // 返回新的头节点
    return dummy;


}


var reverseList = function(head) {
  let stack = [];
  while(head != null){
     stack.push(head.val);
     head = head.next
  } 
  let dummy = new ListNode(0);
  let curr = dummy;
  while(stack.length > 0){
      let num = stack.pop();
      let newNode = new ListNode(num);
      curr.next = newNode ; 
      curr = curr.next
  }
  return dummy.next
};