var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    while (l1 != null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2 != null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let str1 = stack1.reverse().join('');
    let str2 = stack2.reverse().join('');
    
    let sum = BigInt(str1) + BigInt(str2);
    let sumStr = sum.toString();
    
    let dummy = new ListNode(0);
    let curr = dummy;
    
    for (let i = sumStr.length - 1; i >= 0; i--) {
        let digit = parseInt(sumStr[i]);
        let newNode = new ListNode(digit);
        curr.next = newNode;
        curr = curr.next;
    }
    
    return dummy.next;
};