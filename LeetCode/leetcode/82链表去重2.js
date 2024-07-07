var deleteDuplicates = function(head) {  
    let stack = [];  
    while (head != null) {  
      stack.push(head.val);  
      head = head.next;  
    }  
    
    let num = 0;  
    let newStack = [];  
    for (let a of stack) {  
      num = 0;  
      for (let b of stack) {  
        if (a === b) {  
          num++;  
        }  
      }  
      if (num === 1) {  
        newStack.push(a);  
      }  
    }  
    
    let dummy = new ListNode(0);  
    let curr = dummy;  
    while (newStack.length > 0) {  
      let n = newStack.shift();  
      let newNode = new ListNode(n);  
      curr.next = newNode;  
      curr = curr.next;  
    }  
    return dummy.next;  
  };