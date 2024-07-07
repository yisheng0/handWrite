var deleteDuplicates = function(head) {
    let stack = [];
    while(head != null){
        stack.push(head.val);
        head = head.next
    }
    let newStack = [...new Set(stack)];
    let dummy = new ListNode(0)
    let curr = dummy
    while(newStack.length > 0){
         let n = newStack.shift();
         let newNode = new ListNode(n);
         curr.next = newNode;
         curr = curr.next
    }
    return dummy.next
 };